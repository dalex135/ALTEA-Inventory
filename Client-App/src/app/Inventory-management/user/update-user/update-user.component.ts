import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/models/user';
import { ConfigService } from 'src/app/services/config.service';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userForm: FormGroup;

  userTypes =  ['Admin', 'Principal', 'Sponsor']

  constructor(private formBuilder: FormBuilder,
              private httpClient: HttpClient,
              private configService: ConfigService,
              private snackBar: MatSnackBar) {

    this.userForm = this.formBuilder.group({
      name: ['', Validators.nullValidator],
      userName: ['', Validators.nullValidator],
      password: ['', Validators.nullValidator],
      phoneNumber: ['', Validators.nullValidator],
      email: ['', Validators.nullValidator],
      userType: ['', Validators.nullValidator],
    });
  }

  ngOnInit() {

  }

  add(){

    var user = {
      name: this.userForm.controls['name'].value,
      userName: this.userForm.controls['userName'].value,
      password: this.userForm.controls['password'].value,
      phoneNumber: this.userForm.controls['phoneNumber'].value,
      email: this.userForm.controls['email'].value,
      userType: this.userForm.controls['userType'].value,
    }

    this.httpClient.post<User>(this.configService.getURL('User','Update'), user,
    {headers:this.configService.getHeader(), responseType: 'json'}).subscribe(result =>
      {
        if (result){
          this.snackBar.open('The user was uploaded!', 'Ok', {
            duration: 2000
          });
          this.initializeForm()
        }
        else{
          this.snackBar.open('The user was not uploaded!', 'Ok', {
            duration: 2000
          });
        }
      }
    );
  }

  initializeForm(){
    this.userForm = this.formBuilder.group({
      name: ['', Validators.nullValidator],
      userName: ['', Validators.nullValidator],
      password: ['', Validators.nullValidator],
      phoneNumber: ['', Validators.nullValidator],
      email: ['', Validators.nullValidator],
      userType: ['', Validators.nullValidator],
    });
  }

}
