import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Device } from '../models/device';
import { School } from '../models/school';
import { AddDeviceComponent } from './add-device/add-device.component';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { UserAccountService } from '../services/userAccount.service';
import { ConfigService } from '../services/config.service';
import { User } from '../models/user';

@Component({
  selector: 'app-Inventory-management',
  templateUrl: './Inventory-management.component.html',
  styleUrls: ['./Inventory-management.component.css']
})
export class InventoryManagementComponent {


  displayedColumnsDevices: string[] = ['name', 'type', 'brand', 'quantity', 'serialNumber'];
  displayedColumnsSchools: string[] = ['name', 'principal', 'emailAddress', 'phoneNumber'];
  displayedColumnsUsers: string[] = ['name', 'userName', 'phoneNumber', 'email'];

  datasourceDevices: any;
  datasourceSchools: any;
  datasourceUser: any;

  userAccountService: UserAccountService;
  configService:ConfigService;


  // , public dialog: MatDialog, private dialogRef: MatDialogRef<AddDeviceComponent>

  constructor(private http: HttpClient, userAccountService: UserAccountService,
     configService: ConfigService) {

    this.userAccountService = userAccountService;
    this.configService = configService;

    const headersDevice = { 'Access-Control-Allow-Origin':this.configService.Get_URL('Device'),
                      'Access-Control-Allow-Credentials': 'true',
                      'content-type': 'application/json'}
    this.http.get<Device[]>(this.configService.Get_URL('Device','GetAll'), {headers:headersDevice, responseType: 'json'}).subscribe(
      devices=>{
          this.datasourceDevices = devices;
          }
    )

    const headersSchool = { 'Access-Control-Allow-Origin':this.configService.Get_URL('School'),
                      'Access-Control-Allow-Credentials': 'true',
                      'content-type': 'application/json'}
    this.http.get<School[]>(this.configService.Get_URL('School','GetAll'), {headers:headersSchool, responseType: 'json'}).subscribe(
      schools=>{
          this.datasourceSchools = schools;
          }
    )

    const headersUser = { 'Access-Control-Allow-Origin':this.configService.Get_URL('User'),
                      'Access-Control-Allow-Credentials': 'true',
                      'content-type': 'application/json'}
    this.http.get<User[]>(this.configService.Get_URL('User','GetAll'), {headers:headersSchool, responseType: 'json'}).subscribe(
      users=>{
          this.datasourceUser= users;
          }
    )

  }

  // openDeviceDialog(){
  //   const dialogRef = this.dialog.open(AddDeviceComponent, {
  //     width: '450px',
  //     height: '450px',
  //   });
  // }

}


