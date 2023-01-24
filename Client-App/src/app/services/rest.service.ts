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

}
