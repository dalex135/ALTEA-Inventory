import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { School } from 'src/app/models/school';
import { ConfigService } from 'src/app/services/config.service';
import { RestService } from 'src/app/services/rest.service';
import { UserAccountService } from 'src/app/services/userAccount.service';

@Component({
  selector: 'app-remove-school',
  templateUrl: './remove-school.component.html',
  styleUrls: ['./remove-school.component.css']
})
export class RemoveSchoolComponent {

  removeID:number
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
    this.removeID = 0;
  }

  remove(){
    this.restService.removeSchool(this.removeID).subscribe( result=>{

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
    this.restService.getSchool(this.removeID).subscribe( school => {
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
