import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  readonly ROOT_URL = 'http://localhost:5218';

  constructor() { }

  getURL(...segments: string[]) {
    var url = this.ROOT_URL;
    segments.forEach(segment=>{
      url = url + '/' + segment;
    })
    return url;
  }

  getHeader(){
    return { 'Access-Control-Allow-Origin':this.ROOT_URL,
          'Access-Control-Allow-Credentials': 'true',
          'content-type': 'application/json'}
  }

  getNullSchool(){
    return {
      id: 0,
      name: '',
      phoneNumber: '',
      email: '',
      address:'',
      principalForeignKey:0,
      principal: this.getNullUser()
    }
  }

  getNullUser(){
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
