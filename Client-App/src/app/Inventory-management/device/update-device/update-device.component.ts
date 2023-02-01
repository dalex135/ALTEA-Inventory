import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Device } from 'src/app/models/device';
import { ConfigService } from 'src/app/services/config.service';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-update-device',
  templateUrl: './update-device.component.html',
  styleUrls: ['./update-device.component.css']
})
export class UpdateDeviceComponent {

  updateID:number
  device:Device = {
    id: 0,
    description: '',
    serialNumber: '',
    type: '',
    brand: '',
    quantity: '',
    school: this.configService.getNullSchool(),
    schoolForeignKey: 0
  };

  constructor(private restService:RestService,
    private snackBar: MatSnackBar,
    private router:Router,
    private configService: ConfigService) {
    this.updateID = 0;
  }

  update(){

    var device = {
      id: this.updateID,
      description: this.device.description,
      serialNumber:  this.device.serialNumber,
      type: this.device.type,
      brand: this.device.brand,
      quantity: this.device.quantity,
      schoolForeignKey: this.device.schoolForeignKey
    };

    this.restService.updateDevice(device).subscribe( result=>{

      if (result==true){

        this.snackBar.open('Device deleted!', 'Ok', {
          duration: 2000
        });
      }else{
        this.snackBar.open('Error occured while deleting the device!', 'Ok', {
          duration: 2000
        });
      }
    }
    )
  }

  selectVerifyUser(){
    this.restService.getDevice(this.updateID).subscribe( device => {
        if(device==null){
          this.snackBar.open('Please enter a valid/existing ID!', 'Ok', {
            duration: 2000
          });
        }
        else{
          if(device.schoolForeignKey==null){
            device.school = this.configService.getNullSchool();
            this.device = device;
          }
          else{
            this.restService.getSchool(device.schoolForeignKey).subscribe(school=>
              {
                device.school = school;
                this.device = device;
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
