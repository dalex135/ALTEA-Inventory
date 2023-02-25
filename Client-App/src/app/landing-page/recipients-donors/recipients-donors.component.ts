import { Donor } from 'src/app/models/user';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { AgmCoreModule } from '@agm/core';
import { Recipient } from 'src/app/models/recipient';
import { RestService } from 'src/app/services/rest.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recipients-donors',
  templateUrl: './recipients-donors.component.html',
  styleUrls: ['./recipients-donors.component.css']
})
export class RecipientsDonorsComponent  {

  recipientAgmMarkers:any[] = [];
  allRecipients!: Recipient[];
  allDonations!: any;
  allDonors!: Donor[];
  selectedRecipients: Recipient[]= [];
  donorwiseDonations:any = [];
  selectedOption: string = 'option1';

  // markerOptions: google.maps.MarkerOptions = {

  //   icon: {
  //     url: 'path/to/icon.png'
  //   }
  // };

  // getIconSize(zoom: number): google.maps.Size {
  //   let width = 32; // default width
  //   let height = 32; // default height
  //   if (zoom > 10) {
  //     width = 64;
  //     height = 64;
  //   } else if (zoom > 5) {
  //     width = 48;
  //     height = 48;
  //   }
  //   /// <reference types="@types/googlemaps" />
  //   return new google.maps.Size(width, height);
  // }



  constructor(private restService:RestService,
              private modalService: NgbModal,
              private http: HttpClient,
              private router:Router) {
    this.restService.getAllRecipients().subscribe(recipients =>
      {
       this.allRecipients = recipients;
       this.restService.getAllDonations().subscribe(donations =>{
          this.allDonations = donations;
          this.selectDevicesRecpients();

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

  goTo(sectionName:string, mapView:number){
    document.getElementById(sectionName)?.scrollIntoView();
    if(mapView==1){
      this.selectDevicesRecpients();
      this.selectedOption = 'option1';
    }
    else if(mapView==2){
      this.selectDevicesExpectingRecpients();
      this.selectedOption = 'option2';
    }
    else if(mapView==3){
      this.selectInternetRecpients();
      this.selectedOption = 'option3';
    }
    else if(mapView==4){
      this.selectInternetExpectingRecpients();
      this.selectedOption = 'option4';
    }
  }

  onChosenLocation(event:any){

  }

  selectDevicesRecpients(){
    this.selectedRecipients =[];


    for (let recpient of this.allRecipients){
      for (let donation of this.allDonations){
        if(donation.donationType==3&&donation.isDonated && recpient.id == donation.recipientForeignKey){
          this.selectedRecipients.push(recpient);
          break;
        }
      }
    }
    this.setAgmMarkers()
    }
    selectInternetRecpients(){
      this.selectedRecipients =[];

    for (let recpient of this.allRecipients){
      for (let donation of this.allDonations){
        if(donation.donationType==1&&donation.isDonated && recpient.id == donation.recipientForeignKey){
          this.selectedRecipients.push(recpient);
          break;
        }
      }
    }
    this.setAgmMarkers()
    }

    selectDevicesExpectingRecpients(){
      this.selectedRecipients =[];
      for (let recpient of this.allRecipients){
        for (let donation of this.allDonations){
          if(donation.donationType==3 && !donation.isDonated && recpient.id == donation.recipientForeignKey){
            this.selectedRecipients.push(recpient);
            break;
          }
        }
      }
      this.setAgmMarkers()
    }
    selectInternetExpectingRecpients(){
      this.selectedRecipients =[];
      for (let recpient of this.allRecipients){
        for (let donation of this.allDonations){
          if(donation.donationType==1 && !donation.isDonated && recpient.id == donation.recipientForeignKey){
            this.selectedRecipients.push(recpient);
            break;
          }
        }
      }
      this.setAgmMarkers()
    }

    setAgmMarkers(){
      this.recipientAgmMarkers = [];
      this.selectedRecipients.forEach(recipient=>{
        this.restService.getAgmMarkers(recipient.address.replaceAll(' ','+')).subscribe(result=>{

          this.recipientAgmMarkers.push({
            recipientName: recipient.name,
            latitude: result.results[0].geometry.location.lat,
            longitude: result.results[0].geometry.location.lng
          });

        });
      })

    }

  onMouseOver(infoWindow:any, gm:any) {
      infoWindow.close();
      if (gm.lastOpen != null) {
          gm.lastOpen.close();

      }

      gm.lastOpen = infoWindow;

      infoWindow.open();
  }

  openMore(){
    var report = [];
    this.router.navigate(['/donors']);
   }
}





