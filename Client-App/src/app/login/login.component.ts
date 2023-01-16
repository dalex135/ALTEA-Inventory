
import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { UserAccountService } from '../services/userAccount.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  form: any = {
    username: null,
    password: null
  };

  userAccountService: UserAccountService

  constructor(
    private router: Router, userAcount: UserAccountService
  ) {
      this.userAccountService = userAcount;
   }

  logIn(){
    console.log(this.form);
    this.userAccountService.login(this.form.username, this.form.password).subscribe(user => {
      if (user != null){
        this.userAccountService.user = user;
        this.router.navigate(['am']);
      }

    });
  }
}
