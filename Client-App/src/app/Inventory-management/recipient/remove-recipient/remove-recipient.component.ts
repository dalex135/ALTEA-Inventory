import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Recipient } from 'src/app/models/recipient';
import { ConfigService } from 'src/app/services/config.service';
import { RestService } from 'src/app/services/rest.service';
import { UserAccountService } from 'src/app/services/userAccount.service';

@Component({
  selector: 'app-remove-recipient',
  templateUrl: './remove-recipient.component.html',
  styleUrls: ['./remove-recipient.component.css']
})
export class RemoveRecipientComponent {

  removeID:number
  recipient:Recipient = {
    id: 0,
    name: '',
    recipientLeader: this.configService.getNullUser(),
    email: '',
    phoneNumber: '',
    address: '',
    recipientLeaderForeignKey: 0,
    recipientType: '',
  };

  constructor(private restService:RestService,
    private snackBar: MatSnackBar,
    private router:Router,
    private configService: ConfigService) {
    this.removeID = 0;
  }

  remove(){
    this.restService.removeRecipient(this.removeID).subscribe( result=>{

      if (result==true){

        this.snackBar.open('Recipient deleted!', 'Ok', {
          duration: 2000
        });
      }else{
        this.snackBar.open('Error occured while deleting the Recipient!', 'Ok', {
          duration: 2000
        });
      }
    }

    )

  }

  selectVerifyUser(){
    this.restService.getRecipient(this.removeID).subscribe( recipient => {
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
