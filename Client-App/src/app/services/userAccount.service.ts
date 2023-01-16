import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {

user:User = {id: 0,
  name: '',
  userName: '',
  password: '',
  phoneNumber: '',
  email: ''};
httpClient: HttpClient;
readonly LOGIN_ROOT_URL = 'http://localhost:5218/User/GetByUserName';

constructor(router: Router, httpClient: HttpClient) {
  this.httpClient = httpClient;
}

login(username:string, password: string) {
  const headersLogin = { 'Access-Control-Allow-Origin':'http://localhost:5218',
                      'Access-Control-Allow-Credentials': 'true',
                      'content-type': 'application/json'}

    return this.httpClient.get<User>(this.LOGIN_ROOT_URL+'/'+username,
    {headers:headersLogin, responseType: 'json'})

}


}
