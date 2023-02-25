import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  // readonly ROOT_URL = '/api';
  readonly ROOT_URL = 'https://localhost:7042';

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

  getNullrecipient(){
    return {
      id: 0,
      name: '',
      phoneNumber: '',
      email: '',
      address:'',
      recipientLeaderForeignKey:0,
      recipientLeader: this.getNullUser(),
      recipientType: 'School'
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
