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

  displayedColumnsDevices: string[] = ['id', 'description', 'type', 'brand', 'quantity', 'serialNumber', 'school'];
  displayedColumnsSchools: string[] = ['id', 'name', 'principal', 'email', 'phoneNumber', 'address'];
  displayedColumnsUsers: string[] = ['id', 'name', 'userName', 'phoneNumber', 'email', 'userType'];

  datasourceDevices: any;
  datasourceSchools: any;
  datasourceUsers: any;

  constructor(
    private restService: RestService) {

      //////////////////////////////////////////////////USER-RESTSEVICE-START
      restService.getAllUsers().subscribe(
        users=>{
          this.datasourceUsers= users;
          //////////////////////////////////////////////SCHOOL-RESTSEVICE-START
          restService.getAllSchools().subscribe(
            schools=>{
              schools.forEach(school=>{
                  if (school.principalForeignKey==null){
                    school.principal = this.getNullPrincipal();
                  }else{
                    users.forEach(u=>{
                      if(u.id==school.principalForeignKey)
                        school.principal = u;
                    });
                  }
                }
                )
              this.datasourceSchools = schools;
              ///////////////////////////////////////////DEVICE-RESTSERVICE-START
              restService.getAllDevices().subscribe(
                devices=>{
                  devices.forEach(device=>{
                    if (device.schoolForeignKey==null){
                      device.school = this.getNullSchool();
                    }else{
                      schools.forEach(s=>{
                        if(s.id==device.schoolForeignKey)
                        device.school = s;
                      })
                    }
                  }
                  )
                  this.datasourceDevices = devices;
                }
                )
                //////////////////////////////////////DEVICE-RESTSERVICE-END
            }
            )
            //////////////////////////////////////////SCHOOL-RESTSEVICE-END
        }
      )
      ////////////////////////////////////////////////USER-RESTSEVICE-END


  }

  getNullSchool(){
    return {
      id: 0,
      name: '',
      phoneNumber: '',
      email: '',
      address:'',
      principalForeignKey:0,
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
