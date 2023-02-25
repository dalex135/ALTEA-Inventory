import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ConfigService } from 'src/app/services/config.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/models/user';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent{

  selectedImage: any;
  userForm: FormGroup;
  showPassword: boolean = false;
  userTypesEnum =  ['Admin', 'RecipientLeader', 'Donor'];
  userTypesStrings =  ['Admin', 'RecipientLeader', 'Donor'];
  donorTypes =  ['Internet', 'Device', 'Financial'];
  recipientLeaderTypes =  ['Principal', 'ChiefOfficer', 'Priest', ];

  constructor(private formBuilder: FormBuilder,
              private snackBar: MatSnackBar,
              private restService: RestService,
              private router: Router) {

    this.userForm = this.formBuilder.group({
      file: ['', Validators.nullValidator],
      name: ['', Validators.nullValidator],
      userName: ['', Validators.nullValidator],
      password: ['', Validators.nullValidator],
      phoneNumber: ['', Validators.nullValidator],
      email: ['', Validators.nullValidator],
      userType: ['', Validators.nullValidator],
      donorType: ['', Validators.nullValidator],
      recipientLeaderType: ['', Validators.nullValidator],
    });
  }

  add(){

    var user = {
      fileString: this.selectedImage,
      name: this.userForm.controls['name'].value,
      userName: this.userForm.controls['userName'].value,
      password: this.userForm.controls['password'].value,
      phoneNumber: this.userForm.controls['phoneNumber'].value,
      email: this.userForm.controls['email'].value,
      userType: this.userForm.controls['userType'].value,
      recipientLeaderType: this.userForm.controls['recipientLeaderType'].value,
    }
    if (this.userForm.controls['userType'].value=='Donor')
    this.restService.saveDonor(user).subscribe(result =>
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
    else if(this.userForm.controls['userType'].value=='RecipientLeader'){
      this.restService.saveRecipientLeader(user).subscribe(result =>
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
    }else{
      this.restService.saveAdmin(user).subscribe(result =>
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

      //   console.log(JSON.stringify(user));
      //     this.restService.saveUser(user).subscribe(result =>
      //   {
      //     if (result){
      //       this.snackBar.open('The user was uploaded!', 'Ok', {
      //         duration: 2000
      //       });
      //       this.initializeForm()
      //     }
      //     else{
      //       this.snackBar.open('The user was not uploaded!', 'Ok', {
      //         duration: 2000
      //       });
      //     }
      //   }
      // );
  }

  initializeForm(){
    this.selectedImage = null;
    this.userForm = this.formBuilder.group({
      file: ['', Validators.nullValidator],
      name: ['', Validators.nullValidator],
      userName: ['', Validators.nullValidator],
      password: ['', Validators.nullValidator],
      phoneNumber: ['', Validators.nullValidator],
      email: ['', Validators.nullValidator],
      userType: ['', Validators.nullValidator],
      donorType: ['', Validators.nullValidator],
      recipientLeaderType: ['', Validators.nullValidator],
    });
  }

  goHome(){
    this.router.navigate(['inventory']);
  }

  togglePasswordVisibility(){
    this.showPassword = !this.showPassword;
  }

  onFileSelected(event:any){
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
			this.selectedImage = reader.result;
		}
  }

}
