import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Device } from '../models/device';
import { School } from '../models/school';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { UserAccountService } from '../services/userAccount.service';
import { ConfigService } from '../services/config.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory-management',
  templateUrl: './inventory-management.component.html',
  styleUrls: ['./inventory-management.component.css']
})
export class InventoryManagementComponent {

  userAccountService: UserAccountService

  constructor(private http: HttpClient,
            private configService: ConfigService,
            private router:Router,
            userAccountService: UserAccountService,) {

              this.userAccountService = userAccountService

  }

  addUser(){
    this.router.navigate(['add-user']);
  }
  removeUser(){
    this.router.navigate(['remove-user']);
  }
  updateUser(){
    this.router.navigate(['update-user']);
  }

  addSchool(){
    this.router.navigate(['add-school']);
  }
  removeSchool(){
    this.router.navigate(['remove-school']);
  }
  updateSchool(){
    this.router.navigate(['update-school']);
  }

  addDevice(){
    this.router.navigate(['add-device']);
  }
  removeDevice(){
    this.router.navigate(['remove-device']);
  }
  updateDevice(){
    this.router.navigate(['update-device']);
  }

}


