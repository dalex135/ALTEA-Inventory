import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Device } from '../models/device';
import { School } from '../models/school';
import { AddDeviceComponent } from './add-device/add-device.component';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-Inventory-management',
  templateUrl: './Inventory-management.component.html',
  styleUrls: ['./Inventory-management.component.css']
})
export class InventoryManagementComponent {

  readonly DEVICE_ROOT_URL = 'http://localhost:5244/Device';
  readonly SCHOOL_ROOT_URL = 'http://localhost:5244/School';
  devices!: Device[];
  schools!: School[];
  displayedColumnsDevices: string[] = ['name', 'type', 'brand', 'quantity', 'serialNumber'];
  displayedColumnsSchools: string[] = ['name', 'principal', 'emailAddress', 'phoneNumber'];

  datasourceDevices: any;
  datasourceSchools: any;

  // , public dialog: MatDialog, private dialogRef: MatDialogRef<AddDeviceComponent>

  constructor(private http: HttpClient) {
    const headersDevice = { 'Access-Control-Allow-Origin':this.DEVICE_ROOT_URL,
                      'Access-Control-Allow-Credentials': 'true',
                      'content-type': 'application/json'}
    this.http.get<Device[]>(this.DEVICE_ROOT_URL, {headers:headersDevice, responseType: 'json'}).subscribe(
      devices=>{
          this.datasourceDevices = devices;
          }
    )

    const headersSchool = { 'Access-Control-Allow-Origin':this.SCHOOL_ROOT_URL,
                      'Access-Control-Allow-Credentials': 'true',
                      'content-type': 'application/json'}
    this.http.get<School[]>(this.SCHOOL_ROOT_URL, {headers:headersSchool, responseType: 'json'}).subscribe(
      schools=>{
          this.datasourceSchools = schools;
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


