import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-remove-user',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.css']
})
export class RemoveUserComponent {

  removeID:number
  showPassword: boolean = false;

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
    private router:Router) {
    this.removeID = 0;
  }

  remove(){
    this.restService.removeUser(this.removeID).subscribe( result=>{

      if (result==true){

        this.snackBar.open('User deleted!', 'Ok', {
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
    this.restService.getUser(this.removeID).subscribe( u => {
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

  togglePasswordVisibility(){
    this.showPassword = !this.showPassword;
  }

}
