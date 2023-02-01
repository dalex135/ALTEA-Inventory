import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { School } from 'src/app/models/school';
import { ConfigService } from 'src/app/services/config.service';
import { RestService } from 'src/app/services/rest.service';


@Component({
  selector: 'app-update-school',
  templateUrl: './update-school.component.html',
  styleUrls: ['./update-school.component.css']
})
export class UpdateSchoolComponent {

  updateID:number
  school:School = {
    id: 0,
    name: '',
    principal: this.configService.getNullUser(),
    email: '',
    phoneNumber: '',
    address: '',
    principalForeignKey: 0,
  };

  constructor(private restService:RestService,
    private snackBar: MatSnackBar,
    private router:Router,
    private configService: ConfigService) {
    this.updateID = 0;
  }

  update(){

    var school = {
      id: this.updateID,
      name: this.school.name,
      email: this.school.email,
      phoneNumber: this.school.phoneNumber,
      address: this.school.address,
      principalForeignKey: this.school.principalForeignKey,
    };


    this.restService.updateSchool(school).subscribe( result=>{

      if (result==true){

        this.snackBar.open('School updated!', 'Ok', {
          duration: 2000
        });
      }else{
        this.snackBar.open('Error occured while updating the school!', 'Ok', {
          duration: 2000
        });
      }
    }
    )
  }

  selectVerifyUser(){
    this.restService.getSchool(this.updateID).subscribe( school => {
        if(school==null){
          this.snackBar.open('Please enter a valid/existing ID!', 'Ok', {
            duration: 2000
          });
        }
        else{

          if(school.principalForeignKey==null){
            school.principal = this.configService.getNullUser();
            this.school = school;
          }
          else{
            this.restService.getUser(school.principalForeignKey).subscribe(user=>
              {
                school.principal = user;
                this.school = school;
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
