import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Recipient } from 'src/app/models/recipient';
import { User } from 'src/app/models/user';
import { ConfigService } from 'src/app/services/config.service';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-add-recipient',
  templateUrl: './add-recipient.component.html',
  styleUrls: ['./add-recipient.component.css']
})
export class AddRecipientComponent implements OnInit {

  recipientForm: FormGroup;
  allrecipientLeaders: any[] = [];
  recipientTypeStrings = ['School', 'Educational Office', 'Church', 'Temple'];
  recipientTypeEnum = ['School', 'EducationalOffice', 'Church', 'Temple'];
  internetStatusStrings = ['Have Interenet', 'Doesn\'t have Internet', 'Expecting'];
  internetStatusEnum = ['Possess', 'NotPossess', 'Expect'];


  constructor(private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private restService: RestService,
    private router: Router) {

    this.recipientForm = this.formBuilder.group({
      name: ['', Validators.nullValidator],
      recipientLeader: [0, Validators.nullValidator],
      email: ['', Validators.nullValidator],
      phoneNumber: ['', Validators.nullValidator],
      address: ['', Validators.nullValidator],
      recipientType: ['', Validators.nullValidator],
      internetStatus: ['', Validators.nullValidator],
    });

    this.restService.getAllUsers().subscribe(users =>
      {
        users.forEach(user=>{
          if(user.userType==2){
            this.allrecipientLeaders.push(user);
          }
        });

      }
    );

  }

  ngOnInit() {

  }

  getAllPrinciples(){
    return
  }

  add(){

    var recipient = {
      name: this.recipientForm.controls['name'].value,
      recipientLeaderForeignKey:this.recipientForm.controls['recipientLeader'].value==''?0:this.recipientForm.controls['recipientLeader'].value,
      email: this.recipientForm.controls['email'].value,
      phoneNumber: this.recipientForm.controls['phoneNumber'].value,
      address: this.recipientForm.controls['address'].value,
      recipientType: this.recipientForm.controls['recipientType'].value,
      InternetStatus: this.recipientForm.controls['internetStatus'].value,
    }

    this.restService.saveRecipient(recipient).subscribe(result =>
      {
        if (result){
          this.snackBar.open('The Recipient was saved!', 'Ok', {
            duration: 2000
          });
          this.initializeForm()
        }
        else{
          this.snackBar.open('The Recipient was not saved!', 'Ok', {
            duration: 2000
          });
        }
      }
    );
  }

  initializeForm(){
    this.recipientForm = this.formBuilder.group({
      name: ['', Validators.nullValidator],
      recipientLeader: ['', Validators.nullValidator],
      email: ['', Validators.nullValidator],
      phoneNumber: ['', Validators.nullValidator],
      address: ['', Validators.nullValidator],
      recipientType: ['', Validators.nullValidator],
      internetStatus: ['', Validators.nullValidator],
    });
  }

  goHome(){
    this.router.navigate(['inventory']);
  }
}
