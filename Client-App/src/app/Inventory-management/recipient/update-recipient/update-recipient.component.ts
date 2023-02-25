import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Recipient } from 'src/app/models/recipient';
import { ConfigService } from 'src/app/services/config.service';
import { RestService } from 'src/app/services/rest.service';


@Component({
  selector: 'app-update-recipient',
  templateUrl: './update-recipient.component.html',
  styleUrls: ['./update-recipient.component.css']
})
export class UpdateRecipientComponent {

  recipientTypeStrings = ['School', 'Educational Office', 'Church', 'Temple'];
  recipientTypeEnum = ['School', 'EducationalOffice', 'Church', 'Temple'];


  updateID:number
  recipient:Recipient = {
    id: 0,
    name: '',
    recipientLeader: this.configService.getNullUser(),
    email: '',
    phoneNumber: '',
    address: '',
    recipientLeaderForeignKey: 0,
    recipientType:''
  };

  constructor(private restService:RestService,
    private snackBar: MatSnackBar,
    private router:Router,
    private configService: ConfigService) {
    this.updateID = 0;
  }

  update(){

    var recipient = {
      id: this.updateID,
      name: this.recipient.name,
      email: this.recipient.email,
      phoneNumber: this.recipient.phoneNumber,
      address: this.recipient.address,
      recipientLeaderForeignKey: this.recipient.recipientLeaderForeignKey,
      recipientType: this.recipient.recipientType
    };


    this.restService.updateRecipient(recipient).subscribe( result=>{

      if (result==true){

        this.snackBar.open('Recipient updated!', 'Ok', {
          duration: 2000
        });
      }else{
        this.snackBar.open('Error occured while updating the recipient!', 'Ok', {
          duration: 2000
        });
      }
    }
    )
  }

  selectVerifyUser(){
    this.restService.getRecipient(this.updateID).subscribe( recipient => {
        if(recipient==null){
          this.snackBar.open('Please enter a valid/existing ID!', 'Ok', {
            duration: 2000
          });
        }
        else{

          if(recipient.recipientLeaderForeignKey==null){
            recipient.recipientLeader = this.configService.getNullUser();
            this.recipient = recipient;
          }
          else{
            this.restService.getUser(recipient.recipientLeaderForeignKey).subscribe(user=>
              {
                recipient.recipientLeader = user;
                this.recipient = recipient;
              }
            )
          }
        }
      }
    );
  }

  goHome(){
    this.router.navigate(['inventory']);
  }
}
