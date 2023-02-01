import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Device } from 'src/app/models/device';
import { ConfigService } from 'src/app/services/config.service';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-remove-device',
  templateUrl: './remove-device.component.html',
  styleUrls: ['./remove-device.component.css']
})
export class RemoveDeviceComponent{

  removeID:number
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
    this.removeID = 0;
  }

  remove(){
    this.restService.removeDevice(this.removeID).subscribe( result=>{

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
    this.restService.getDevice(this.removeID).subscribe( device => {
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
