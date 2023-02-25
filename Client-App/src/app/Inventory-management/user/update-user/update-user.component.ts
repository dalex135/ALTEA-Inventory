import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ConfigService } from 'src/app/services/config.service';
import { RestService } from 'src/app/services/rest.service';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {

  userTypes =  ['Admin', 'recipientLeader', 'Sponsor']
  updateID:number
  user:User = {
    id: 0,
    name: '',
    userName: '',
    password: '',
    phoneNumber: '',
    email: '',
    userType:''};

  constructor(private restService:RestService,
    private snackBar: MatSnackBar,
    private router:Router,
    private formBuilder: FormBuilder,){


      this.updateID = 0;
    }


  update(){

    var user = {
      id: this.user.id,
      name: this.user.name,
      userName: this.user.userName,
      password: this.user.password,
      phoneNumber: this.user.phoneNumber,
      email: this.user.email,
      userType: this.user.userType,
    }

      console.log(user);
    this.restService.updateUser(user).subscribe( result=>{

      if (result==true){

        this.snackBar.open('User updated!', 'Ok', {
          duration: 2000
        });
      }else{
        this.snackBar.open('Error occured while deleting the user!', 'Ok', {
          duration: 2000
        });
      }
    }

    )

  }

  selectVerifyUser(){
    this.restService.getUser(this.updateID).subscribe( u => {
        if(u==null){
          this.snackBar.open('Please enter a valid/existing ID!', 'Ok', {
            duration: 2000
          });
        }
        else{
          this.user = u;
        }
      }

    );
  }

  goHome(){
    this.router.navigate(['inventory']);
  }

  initializeForm(){

  }

}
