import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {

user:User = {
  id: 0,
  name: '',
  userName: '',
  password: '',
  phoneNumber: '',
  email: '',
  userType:''};

isAccessAuthenticated: boolean = false;

constructor() {

}

}
