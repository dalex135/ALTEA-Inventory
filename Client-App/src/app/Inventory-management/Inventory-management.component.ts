import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAccountService } from '../services/userAccount.service';
import { ConfigService } from '../services/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory-management',
  templateUrl: './inventory-management.component.html',
  styleUrls: ['./inventory-management.component.css']
})
export class InventoryManagementComponent {

  userAccountService: UserAccountService

  constructor(private router:Router,
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


