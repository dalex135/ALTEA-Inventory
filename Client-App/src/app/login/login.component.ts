import { RestService } from 'src/app/services/rest.service';

import { Component} from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAccountService } from '../services/userAccount.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  // form: any = {
  //   username: null,
  //   password: null
  // };

  form: FormGroup;

  userAccountService: UserAccountService

  constructor(
    private router: Router,
    userAccountService: UserAccountService,
    private formBuilder: FormBuilder,
    private restService: RestService
  ) {
      this.userAccountService = userAccountService;

      this.form = this.formBuilder.group({
        username: ['', Validators.nullValidator],
        password: ['', Validators.nullValidator],
      });
   }

  logIn(){

    // this.userAccountService.login(this.form.controls['username'].value,
    // this.form.controls['password'].value).subscribe(user => {
    //   if (user != null){
    //     this.userAccountService.user = user;
    //     this.router.navigate(['inventory']);
    //   }
    // });
    this.router.navigate(['inventory']);
    this.userAccountService.isAccessAuthenticated = true;
    this.restService.authenticate(this.form.controls['username'].value,this.form.controls['password'].value).subscribe(result=>{
      if (result==true){
        this.userAccountService.isAccessAuthenticated = true;
        this.router.navigate(['inventory']);
      }
      else{}
    })
  }
}
