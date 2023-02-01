import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from '../models/device';
import { School } from '../models/school';
import { User } from '../models/user';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient,
    private configService: ConfigService) {}

  getAllUsers():Observable<User[]> {

    return this.http.get<User[]>(this.configService.getURL('User','GetAll'),
      {headers:this.configService.getHeader(), responseType: 'json'});
  }

  getAllSchools():Observable<School[]> {

    return this.http.get<School[]>(this.configService.getURL('School','GetAll'),
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

  getAllDevices():Observable<Device[]> {

    return this.http.get<Device[]>(this.configService.getURL('Device','GetAll'),
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

  saveUser(user:any):Observable<User> {

    return this.http.post<User>(this.configService.getURL('User','Save'), user,
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

  saveSchool(school:any):Observable<School> {

    return this.http.post<School>(this.configService.getURL('School','Save'), school,
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

  saveDevice(device:any):Observable<Device> {

    return this.http.post<Device>(this.configService.getURL('Device','Save'), device,
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

  getUser(id:number):Observable<User>{
    return this.http.get<User>(this.configService.getURL('User','GetByID', String(id)),
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

  removeUser(id:number):Observable<any>{
    return this.http.delete<User>(this.configService.getURL('User','Delete', String(id)),
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

  updateUser(user:any):Observable<any>{
    return this.http.put<User>(this.configService.getURL('User','Update'), user,
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

  getSchool(id:number):Observable<School>{
    return this.http.get<School>(this.configService.getURL('School','GetByID', String(id)),
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

  removeSchool(id:number):Observable<any>{
    return this.http.delete<School>(this.configService.getURL('School','Delete', String(id)),
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

  updateSchool(school:any):Observable<any>{
    return this.http.put<School>(this.configService.getURL('School','Update'), school,
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

  getDevice(id:number):Observable<Device>{
    return this.http.get<Device>(this.configService.getURL('Device','GetByID', String(id)),
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

  removeDevice(id:number):Observable<any>{
    return this.http.delete<Device>(this.configService.getURL('Device','Delete', String(id)),
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

  updateDevice(device:any):Observable<any>{
    return this.http.put<Device>(this.configService.getURL('Device','Update'), device,
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

}
