import { ConfigService } from 'src/app/services/config.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Photo } from 'src/app/models/photo';
import { Recipient } from 'src/app/models/recipient';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-remove-photo',
  templateUrl: './remove-photo.component.html',
  styleUrls: ['./remove-photo.component.css']
})
export class RemovePhotoComponent  {


  removeID: number;

  allrecipients!: Recipient[]

  selectedPhoto: Photo;

  constructor(private formBuilder: FormBuilder,
              private snackBar: MatSnackBar,
              private restService:RestService,
              private router: Router,
              private configService: ConfigService) {


    this.removeID = 0;
    this.selectedPhoto={
      id: 0,
      fileString: '',
      recipient: configService.getNullrecipient(),
      recipientForeignKey: 0,
      description: ''
    }
  }


  initializeForm(){


  }

  goHome(){
    this.router.navigate(['inventory']);
  }





  remove(){
    this.restService.removePhoto(this.removeID).subscribe( result=>{

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
    this.restService.getPhoto(this.removeID).subscribe( photo => {
        if (photo!=null){
          this.selectedPhoto = photo;
        }
      }
    );
  }
}
