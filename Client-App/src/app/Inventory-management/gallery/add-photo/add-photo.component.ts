import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Photo } from 'src/app/models/photo';
import { Recipient } from 'src/app/models/recipient';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent {

  photoForm: FormGroup;

  allrecipients!: Recipient[]

  selectedImage: any;

  constructor(private formBuilder: FormBuilder,
              private snackBar: MatSnackBar,
              private restService:RestService,
              private router: Router) {

    this.photoForm = this.formBuilder.group({
      file: [null, Validators.required],
      recipient: ['', Validators.nullValidator],
      description: ['', Validators.nullValidator],
    });

    this.restService.getAllRecipients().subscribe(recipients =>
      {
       this.allrecipients = recipients
      }
    );
  }

  add(){
    var photo= {

      fileString: this.selectedImage,
      recipientForeignKey: this.photoForm.controls['recipient'].value,
      description: this.photoForm.controls['description'].value,
      }

    this.restService.savePhoto(photo).subscribe(result =>
        {
          if (result){
            this.snackBar.open('The photo was uploaded!', 'Ok', {
              duration: 2000
            });
            this.initializeForm()
          }
          else{
            this.snackBar.open('The photo was not uploaded!', 'Ok', {
              duration: 2000
            });
          }
        }
      );
  }

  initializeForm(){
    this.photoForm = this.formBuilder.group({
      file: [null, Validators.required],
      description: ['', Validators.nullValidator],
      recipient: ['', Validators.nullValidator],

    });

  }

  goHome(){
    this.router.navigate(['inventory']);
  }

  onFileSelected(event:any){
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
			this.selectedImage = reader.result;
		}
  }
}
