import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { School } from 'src/app/models/school';
import { User } from 'src/app/models/user';
import { ConfigService } from 'src/app/services/config.service';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.css']
})
export class AddSchoolComponent implements OnInit {

  schoolForm: FormGroup;
  allPrincipals!: User[];

  constructor(private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private restService: RestService,
    private router: Router) {

    this.schoolForm = this.formBuilder.group({
      name: ['', Validators.nullValidator],
      principal: [0, Validators.nullValidator],
      email: ['', Validators.nullValidator],
      phoneNumber: ['', Validators.nullValidator],
      address: ['', Validators.nullValidator],
    });

    this.restService.getAllUsers().subscribe(principals =>
      {
       this.allPrincipals = principals
      }
    );

  }

  ngOnInit() {

  }

  getAllPrinciples(){
    return
  }

  add(){

    var school = {
      name: this.schoolForm.controls['name'].value,
      principalForeignKey:this.schoolForm.controls['principal'].value==''?0:this.schoolForm.controls['principal'].value,
      email: this.schoolForm.controls['email'].value,
      phoneNumber: this.schoolForm.controls['phoneNumber'].value,
      address: this.schoolForm.controls['address'].value,
    }

    console.log(JSON.stringify(school));

    this.restService.saveSchool(school).subscribe(result =>
      {
        if (result){
          this.snackBar.open('The school was uploaded!', 'Ok', {
            duration: 2000
          });
          this.initializeForm()
        }
        else{
          this.snackBar.open('The school was not uploaded!', 'Ok', {
            duration: 2000
          });
        }
      }
    );
  }

  initializeForm(){
    this.schoolForm = this.formBuilder.group({
      name: ['', Validators.nullValidator],
      principal: ['', Validators.nullValidator],
      email: ['', Validators.nullValidator],
      phoneNumber: ['', Validators.nullValidator],
      address: ['', Validators.nullValidator],
    });
  }

  goHome(){
    this.router.navigate(['inventory']);
  }
}
