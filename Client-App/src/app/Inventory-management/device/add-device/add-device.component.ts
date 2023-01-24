import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Device } from 'src/app/models/device';
import { School } from 'src/app/models/school';
import { ConfigService } from 'src/app/services/config.service';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent  {

  deviceForm: FormGroup;

  allSchools!: School[]

  constructor(private formBuilder: FormBuilder,
              private snackBar: MatSnackBar,
              private restService:RestService) {

    this.deviceForm = this.formBuilder.group({
      description: ['', Validators.nullValidator],
      serialNumber: ['', Validators.nullValidator],
      quantity: [0, Validators.nullValidator],
      type: ['', Validators.nullValidator],
      brand: ['', Validators.nullValidator],
      school: [0, Validators.nullValidator],
    });

    this.restService.getAllSchools().subscribe(schools =>
      {
       this.allSchools = schools
      }
    );
  }

  add(){
    var device = {

      description: this.deviceForm.controls['description'].value,
      serialNumber: this.deviceForm.controls['serialNumber'].value,
      quantity: this.deviceForm.controls['quantity'].value,
      type: this.deviceForm.controls['type'].value,
      brand: this.deviceForm.controls['brand'].value,
      schoolForeignKey: this.deviceForm.controls['school'].value==''? 0: this.deviceForm.controls['school'].value
    }

    this.restService.saveDevice(device).subscribe(result =>
        {
          if (result){
            this.snackBar.open('The device was uploaded!', 'Ok', {
              duration: 2000
            });
            this.initializeForm()
          }
          else{
            this.snackBar.open('The device was not uploaded!', 'Ok', {
              duration: 2000
            });
          }
        }
      );
  }

  initializeForm(){
    this.deviceForm = this.formBuilder.group({
      description: ['', Validators.nullValidator],
      serialNumber: ['', Validators.nullValidator],
      quantity: [0, Validators.nullValidator],
      type: ['', Validators.nullValidator],
      brand: ['', Validators.nullValidator],
      school: ['', Validators.nullValidator],
    });

  }

}
