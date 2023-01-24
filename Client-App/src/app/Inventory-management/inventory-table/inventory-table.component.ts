import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from 'src/app/models/device';
import { School } from 'src/app/models/school';
import { User } from 'src/app/models/user';
import { ConfigService } from 'src/app/services/config.service';
import { RestService } from 'src/app/services/rest.service';
import { UserAccountService } from 'src/app/services/userAccount.service';

@Component({
  selector: 'app-inventory-table',
  templateUrl: './inventory-table.component.html',
  styleUrls: ['./inventory-table.component.css']
})
export class InventoryTableComponent  {

  displayedColumnsDevices: string[] = ['description', 'type', 'brand', 'quantity', 'serialNumber', 'school'];
  displayedColumnsSchools: string[] = ['name', 'principal', 'email', 'phoneNumber', 'address'];
  displayedColumnsUsers: string[] = ['name', 'userName', 'phoneNumber', 'email', 'userType'];

  datasourceDevices: any;
  datasourceSchools: any;
  datasourceUsers: any;

  constructor(
    private restService: RestService) {

      restService.getAllDevices().subscribe(
      devices=>{

        devices.forEach(device=>{
          if (device.school==null){
              device.school = this.getNullSchool();
          }
          }
        )
        this.datasourceDevices = devices;
      }
      )

      restService.getAllSchools().subscribe(
      schools=>{

        schools.forEach(school=>{
            if (school.principal==null){
              school.principal = this.getNullPrincipal();
            }else{
              console.log(school.principal)
            }
          }
          )

        this.datasourceSchools = schools;
      }
      )

      restService.getAllUsers().subscribe(
        users=>{
          this.datasourceUsers= users;
        }
      )
  }

  getNullSchool(){
    return {
      id: 0,
      name: '',
      phoneNumber: '',
      email: '',
      address:'',
      principal: this.getNullPrincipal()
    }
  }

  getNullPrincipal(){
    return {
      id: 0,
      name: '',
      userName: '',
      password: '',
      phoneNumber: '',
      email: '',
      userType:''};
  }

}
