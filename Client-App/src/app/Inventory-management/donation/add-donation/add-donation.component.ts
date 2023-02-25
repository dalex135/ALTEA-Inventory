import { DeviceType } from './../../../models/device-type';
import { Recipient } from 'src/app/models/recipient';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Donor, User } from 'src/app/models/user';
import { RestService } from 'src/app/services/rest.service';
import { DeviceBrand } from 'src/app/models/device-brand';

@Component({
  selector: 'app-add-donation',
  templateUrl: './add-donation.component.html',
  styleUrls: ['./add-donation.component.css']
})
export class AddDonationComponent {
  donationForm: FormGroup;

  allRecipients!: Recipient[];
  allDonors!: Donor[];
  allBrands!: DeviceBrand[];
  allTypes!: DeviceType[];
  donationTypes:string[] = ['Internet', 'Financial', 'Devices']
  isDonatedStrings: string[] = ['Yes', 'No'];

  constructor(private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private restService: RestService,
    private router: Router) {

    this.donationForm = this.formBuilder.group({
      isDonated: ['No', Validators.nullValidator],
      year: [2023, Validators.nullValidator],
      description: ['', Validators.nullValidator],
      recipient: [0, Validators.nullValidator],
      donationType: ['', Validators.nullValidator],
      donor: [0, Validators.nullValidator],
      contribution: ['', Validators.nullValidator],
      deviceBrand: [0, Validators.nullValidator],
      deviceType: [0, Validators.nullValidator],
      quantity: [0, Validators.nullValidator],
      serialNumber: ['', Validators.nullValidator],
      model: ['', Validators.nullValidator],
    });

    this.restService.getAllRecipients().subscribe(recipients=>{
      this.allRecipients=recipients;
    });

    this.restService.getAllDonors().subscribe(donors=>{
      this.allDonors=donors;
    });

    this.restService.getAllBrands().subscribe(brands =>
      {
        this.allBrands = brands;
      });

    this.restService.getAllTypes().subscribe(types =>
      {
        this.allTypes = types;
      });
  }


  getAllPrinciples(){
    return
  }

  add(){
    if (this.donationForm.controls['donationType'].value=='Devices'){
      var deviceDonation = {
        isDonated: this.donationForm.controls['isDonated'].value,
        year: this.donationForm.controls['year'].value,
        description: this.donationForm.controls['description'].value,
        recipientForeignKey: this.donationForm.controls['recipient'].value,
        donationType: this.donationForm.controls['donationType'].value,
        donorForeignKey: this.donationForm.controls['donor'].value,
        contribution: this.donationForm.controls['contribution'].value,
        deviceBrandForeignKey: this.donationForm.controls['deviceBrand'].value,
        deviceTypeForeignKey: this.donationForm.controls['deviceType'].value,
        quantity: this.donationForm.controls['quantity'].value,
        model: this.donationForm.controls['model'].value,
        serialNumber: this.donationForm.controls['serialNumber'].value,

      }

      this.restService.saveDeviceDonation(deviceDonation).subscribe(result =>
        {
          if (result){
            this.snackBar.open('The Donation was saved!', 'Ok', {
              duration: 2000
            });
            this.initializeForm()
          }
          else{
            this.snackBar.open('The Donation was not saved!', 'Ok', {
              duration: 2000
            });
          }
        }
      );
    }else if(this.donationForm.controls['donationType'].value=='Internet'){
      var internetDonation = {
        isDonated: this.donationForm.controls['isDonated'].value,
        year: this.donationForm.controls['year'].value,
        description: this.donationForm.controls['description'].value,
        recipientForeignKey: this.donationForm.controls['recipient'].value,
        donationType: this.donationForm.controls['donationType'].value,
        donorForeignKey: this.donationForm.controls['donor'].value,
        contribution: this.donationForm.controls['contribution'].value,

      }

      this.restService.saveInternetDonation(internetDonation).subscribe(result =>
        {
          if (result){
            this.snackBar.open('The Donation was saved!', 'Ok', {
              duration: 2000
            });
            this.initializeForm()
          }
          else{
            this.snackBar.open('The Donation was not saved!', 'Ok', {
              duration: 2000
            });
          }
        }
      );
    }
    else{
      var financialDonation = {
        isDonated: this.donationForm.controls['isDonated'].value,
        year: this.donationForm.controls['year'].value,
        description: this.donationForm.controls['description'].value,
        recipientForeignKey: this.donationForm.controls['recipient'].value,
        donationType: this.donationForm.controls['donationType'].value,
        donorForeignKey: this.donationForm.controls['donor'].value,
        contribution: this.donationForm.controls['contribution'].value,

      }

      this.restService.saveFinancialDonation(financialDonation).subscribe(result =>
        {
          if (result){
            this.snackBar.open('The Donation was saved!', 'Ok', {
              duration: 2000
            });
            this.initializeForm()
          }
          else{
            this.snackBar.open('The Donation was not saved!', 'Ok', {
              duration: 2000
            });
          }
        }
      );
    }

  }

  initializeForm(){
    this.donationForm = this.formBuilder.group({
      isDonated: ['No', Validators.nullValidator],
      year: [2023, Validators.nullValidator],
      description: ['', Validators.nullValidator],
      recipient: [0, Validators.nullValidator],
      donationType: ['', Validators.nullValidator],
      donor: [0, Validators.nullValidator],
      contribution: ['', Validators.nullValidator],
      deviceBrand: [0, Validators.nullValidator],
      deviceType: [0, Validators.nullValidator],
      quantity: [0, Validators.nullValidator],
      serialNumber: ['', Validators.nullValidator],
      model: ['', Validators.nullValidator],
    });
  }

  goHome(){
    this.router.navigate(['inventory']);
  }
}
