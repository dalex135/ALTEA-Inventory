import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Recipient } from 'src/app/models/recipient';
import { Donor } from 'src/app/models/user';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.css']
})
export class DonorsComponent {

  allRecipients!: Recipient[];
  allDonations!: any;
  allDonors!: Donor[];
  donorwiseDonations:any = [];


  constructor(private restService:RestService,
    private modalService: NgbModal,
    private http: HttpClient,
    private router:Router){
    this.restService.getAllRecipients().subscribe(recipients =>
      {
       this.allRecipients = recipients;
       this.restService.getAllDonations().subscribe(donations =>{
          this.allDonations = donations;

          this.restService.getAllDonors().subscribe(donors=>{
            this.allDonors = donors.reverse().slice(0, Math.min(6,donors.length));
            donors.forEach((donor: any)=>{
              var isInternetDonation = false;
              var internetSchool =''
              var isFinancialDonation = false;
              var equipmentAmount = 0;
              donations.forEach((donation:any)=>{
                if(donation.donorForeignKey==donor.id){
                  if (donation.donationType=="1"){
                    isInternetDonation = true;
                    recipients.forEach(recipient=>{
                      if(donation.recipientForeignKey==recipient.id){

                        internetSchool = recipient.name;
                      }
                    })
                  }
                  else if(donation.donationType=="3"){
                    equipmentAmount = equipmentAmount+donation.quantity;
                  }
                  else{
                    isFinancialDonation = true;
                  }

                }
              });

              if (isInternetDonation || isFinancialDonation){
                var img;
                if(donor.fileString==''||donor.fileString==null){
                  img = 'assets/img/profile-pic.jpg';
                }
                else{

                  img = donor.fileString;
                }
                this.donorwiseDonations.push({
                  image:img,
                  name:donor.name,
                  internetSchool:internetSchool,
                  internet:isInternetDonation,
                  financial:isFinancialDonation
                })
              }
            })
          })
        }
       );
      }
    );
  }
}
