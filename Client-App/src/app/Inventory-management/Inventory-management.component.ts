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
              this.userAccountService = userAccountService;
              if (this.userAccountService.isAccessAuthenticated==false){
                this.router.navigate(['login']);
              }
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
  addrecipient(){
    this.router.navigate(['add-recipient']);
  }
  removerecipient(){
    this.router.navigate(['remove-recipient']);
  }
  updaterecipient(){
    this.router.navigate(['update-recipient']);
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

  addPhoto(){
    this.router.navigate(['add-photo']);
  }
  removePhoto(){
    this.router.navigate(['remove-photo']);
  }
  updatePhoto(){
    this.router.navigate(['update-device']);
  }

  addDonation(){
    this.router.navigate(['add-donation']);
  }
  removeDonation(){
    this.router.navigate(['remove-donation']);
  }
  // updateDonation(){
  //   this.router.navigate(['update-device']);
  // }

  addReport(){
    this.router.navigate(['add-report']);
  }
  removeReport(){
    this.router.navigate(['remove-report']);
  }
  updateReport(){
    this.router.navigate(['update-device']);
  }
  addDeviceInfo(){
    this.router.navigate(['add-device-info']);
  }
  removeDeviceInfo(){
    this.router.navigate(['remove-device-info']);
  }

}


