import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from 'src/app/models/device';
import { Recipient } from 'src/app/models/recipient';
import { User } from 'src/app/models/user';
import { ConfigService } from 'src/app/services/config.service';
import { RestService } from 'src/app/services/rest.service';
import { UserAccountService } from 'src/app/services/userAccount.service';

@Component({
  selector: 'app-inventory-table',
  templateUrl: './inventory-table.component.html',
  styleUrls: ['./inventory-table.component.css']
})
export class InventoryTableComponent  {

  displayedColumnsDonations: string[] = ['id', 'description', 'isAlreadyDonated', 'year', 'donor', 'recipient', 'contribution', 'deviceBrand', 'deviceType'];
  displayedColumnsrecipients: string[] = ['id', 'name', 'recipientLeader', 'email', 'phoneNumber', 'address'];
  displayedColumnsUsers: string[] = ['id', 'name', 'userName', 'phoneNumber', 'email', 'userType'];

  userTypes: string[] = ['Admin', 'Recipient Leader', 'Donor']

  datasourceDonations: any;
  datasourcerecipients: any;
  datasourceUsers: any;

  constructor(
    private restService: RestService) {

      //////////////////////////////////////////////////USER-RESTSEVICE-START
      restService.getAllUsers().subscribe(
        users=>{
          this.datasourceUsers= users;
          //////////////////////////////////////////////recipient-RESTSEVICE-START
          restService.getAllRecipients().subscribe(
            recipients=>{
              recipients.forEach(recipient=>{
                  if (recipient.recipientLeaderForeignKey==null){
                    recipient.recipientLeader = this.getNullrecipientLeader();
                  }else{
                    users.forEach(user=>{
                      if(user.id==recipient.recipientLeaderForeignKey)
                        recipient.recipientLeader = user;
                    });
                  }
                }
                )
              this.datasourcerecipients = recipients;
              ///////////////////////////////////////////DEVICE-RESTSERVICE-START
              restService.getAllDonations().subscribe(donations=>{


                donations.forEach((donation:any)=>{
                  if (donation.recipientForeignKey==null){
                    donation.recipient = this.getNullrecipient();
                  }else{
                    recipients.forEach(recipient=>{
                      if(recipient.id==donation.recipientForeignKey)
                      donation.recipient = recipient;
                    });
                  }

                  if (donation.donorForeignKey==null){
                    donation.donor = this.getNullrecipient();
                  }else{
                    users.forEach(user=>{
                      if(user.id==donation.donorForeignKey)
                      donation.donor = user;
                    });
                  }

                }
                )
                this.datasourceDonations = donations;
              })
                //////////////////////////////////////DEVICE-RESTSERVICE-END
            }
            )
            //////////////////////////////////////////recipient-RESTSEVICE-END
        }
      )
      ////////////////////////////////////////////////USER-RESTSEVICE-END


  }

  getNullrecipient(){
    return {
      id: 0,
      name: '',
      phoneNumber: '',
      email: '',
      address:'',
      recipientLeaderForeignKey:0,
      recipientLeader: this.getNullrecipientLeader(),
      recipientType: ''
    }
  }

  getNullrecipientLeader(){
    return {
      id: 0,
      name: '',
      userName: '',
      password: '',
      phoneNumber: '',
      email: '',
      userType:''};
  }

}
