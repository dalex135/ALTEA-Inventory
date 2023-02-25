import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-add-device-info',
  templateUrl: './add-device-info.component.html',
  styleUrls: ['./add-device-info.component.css']
})
export class AddDeviceInfoComponent {

  selectedDeviceInfo!:string;
  entryName!:string;

  constructor(private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private restService: RestService,
    private router: Router){

  }

  add(){

    var item = {
      name: this.entryName
    }

    if (this.selectedDeviceInfo=='brand'){

      this.restService.saveBrand(item).subscribe(result =>
        {
          if (result){
            this.snackBar.open('The user was uploaded!', 'Ok', {
              duration: 2000
            });
            this.initializeForm()
          }
          else{
            this.snackBar.open('The user was not uploaded!', 'Ok', {
              duration: 2000
            });
          }
        }
      );
    }
    else{
      this.restService.saveType(item).subscribe(result =>
        {
          if (result){
            this.snackBar.open('The user was uploaded!', 'Ok', {
              duration: 2000
            });
            this.initializeForm()
          }
          else{
            this.snackBar.open('The user was not uploaded!', 'Ok', {
              duration: 2000
            });
          }
        }
      );
    }
  }

  goHome(){
    this.router.navigate(['inventory']);
  }

  initializeForm(){
    this.entryName = '';
  }

}
