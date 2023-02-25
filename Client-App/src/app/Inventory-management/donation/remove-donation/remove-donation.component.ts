import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-remove-donation',
  templateUrl: './remove-donation.component.html',
  styleUrls: ['./remove-donation.component.css']
})
export class RemoveDonationComponent {
  removeID: number;

  allDonations!: any[];

  selectedDonation: any;

  constructor(private snackBar: MatSnackBar,
              private restService:RestService,
              private router: Router,
              private configService: ConfigService) {


    this.removeID = 0;
    this.selectedDonation={
      id: 0,
      isDonated: '',
      year: '',
      description: '',
      recipient: '',
      donationType: '',
      donor: '',
      contribution: '',
      deviceBrand: '',
      deviceType: '',
      quantity: '',
      serialNumber:'',
      model: '',
    }
  }


  initializeForm(){
    this.selectedDonation={
      id: 0,
      isDonated: '',
      year: '',
      description: '',
      recipient: '',
      donationType: '',
      donor: '',
      contribution: '',
      deviceBrand: '',
      deviceType: '',
      quantity: '',
      serialNumber:'',
      model: '',
    }

  }

  goHome(){
    this.router.navigate(['inventory']);
  }

  remove(){
    this.restService.removeDonation(this.removeID).subscribe( result=>{

      if (result==true){

        this.snackBar.open('Photo deleted!', 'Ok', {
          duration: 2000
        });
      }else{
        this.snackBar.open('Error occured while deleting the Photo!', 'Ok', {
          duration: 2000
        });
      }
    }

    )

  }

  selectVerifyUser(){
    this.restService.getDonation(this.removeID).subscribe( donation => {
        if (donation!=null){
          this.selectedDonation = donation;
        }
      }
    );
  }
}
