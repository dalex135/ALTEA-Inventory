import { Report } from './../models/report';
import { InternetDonation } from './../models/internet-donation';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from '../models/device';
import { Donor } from '../models/user';
import { Photo } from '../models/photo';
import { Recipient } from '../models/recipient';
import { User } from '../models/user';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient,
    private configService: ConfigService) {}

  authenticate(username:string, password:string){
    var userLoginDetails = {
      username:username,
      password:password
    }
    return this.http.post<any>(this.configService.getURL('User','Authenticate'), userLoginDetails,
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

  getAllUsers():Observable<any[]> {

    return this.http.get<any[]>(this.configService.getURL('User','GetAll'),
      {headers:this.configService.getHeader(), responseType: 'json'});
  }

  getAllRecipients():Observable<Recipient[]> {

    return this.http.get<Recipient[]>(this.configService.getURL('Recipient','GetAll'),
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

  getAllDevices():Observable<Device[]> {

    return this.http.get<Device[]>(this.configService.getURL('Device','GetAll'),
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

  saveUser(user:any):Observable<any> {

    return this.http.post<User>(this.configService.getURL('User','Save'), user,
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

  saveRecipientLeader(user:any):Observable<any> {

    return this.http.post<any>(this.configService.getURL('User','SaveRecipientLeader'), user,
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

  saveRecipient(recipient:any):Observable<any> {

    return this.http.post<any>(this.configService.getURL('Recipient','Save'), recipient,
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

  saveAdmin(recipient:any):Observable<any> {

    return this.http.post<any>(this.configService.getURL('User','SaveAdmin'), recipient,
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

  saveDonor(donor:any):Observable<any> {

    return this.http.post<any>(this.configService.getURL('User','SaveDonor'), donor,
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

  getRecipient(id:number):Observable<any>{
    return this.http.get<Recipient>(this.configService.getURL('Recipient','GetByID', String(id)),
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

  removeRecipient(id:number):Observable<any>{
    return this.http.delete<Recipient>(this.configService.getURL('Recipient','Delete', String(id)),
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

  updateRecipient(recipient:any):Observable<any>{
    return this.http.put<Recipient>(this.configService.getURL('Recipient','Update'), recipient,
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

  savePhoto(photo:any):Observable<any> {

    return this.http.post<any>(this.configService.getURL('Gallery','Save'), photo,
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

  getPhoto(id:number):Observable<Photo>{
    return this.http.get<Photo>(this.configService.getURL('Gallery','GetById',String(id)),
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

  removePhoto(id:number):Observable<any>{
    return this.http.delete<Photo>(this.configService.getURL('Gallery','Delete', String(id)),
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

  getGallery():Observable<Photo[]>{
    return this.http.get<Photo[]>(this.configService.getURL('Gallery','GetAll'),
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

  getAllDonors():Observable<any>{
    return this.http.get<Donor[]>(this.configService.getURL('User','GetAllDonors'),
    {headers:this.configService.getHeader(), responseType: 'json'});
  }



  saveReport(report:any):Observable<Report> {

    return this.http.post<Report>(this.configService.getURL('Report','Save'), report,
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

  getReports(reportId:number):Observable<any>{
    return this.http.get<any>(this.configService.getURL('Report','GetAll', String(reportId)),
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

  getAgmMarkers(address:string){
    return this.http.get<any>('https://maps.googleapis.com/maps/api/geocode/json?address='+
    address+ ',&key=AIzaSyCNc1m1jxeRFvdnKllUpjQbhPNlY6tJveo',
    { responseType: 'json'});
  }

  saveBrand(brandItem:any):Observable<any>{
    return this.http.post<any>(this.configService.getURL('DeviceInfo','SaveBrand'), brandItem,
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

  saveType(typeItem:any):Observable<any>{
    return this.http.post<any>(this.configService.getURL('DeviceInfo','SaveType'), typeItem,
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

  getAllBrands():Observable<any>{
    return this.http.get<any>(this.configService.getURL('DeviceInfo','GetAllBrands'),
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

  getAllTypes():Observable<any>{
    return this.http.get<any>(this.configService.getURL('DeviceInfo','GetAllTypes'),
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

  saveDeviceDonation(donation:any):Observable<any>{
    return this.http.post<any>(this.configService.getURL('Donation','SaveDeviceDonation'), donation,
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

  saveInternetDonation(internetDonation:any):Observable<InternetDonation> {

    return this.http.post<any>(this.configService.getURL('Donation','SaveInternetDonation'), internetDonation,
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

  saveFinancialDonation(internetDonation:any):Observable<InternetDonation> {

    return this.http.post<any>(this.configService.getURL('Donation','SaveFinancialDonation'), internetDonation,
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

  getAllDonations():Observable<any>{
    return this.http.get<any>(this.configService.getURL('Donation','GetAllDonations'),
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

  getDonation(id:number):Observable<any>{
    return this.http.get<any>(this.configService.getURL('Donation','GetById',String(id)),
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

  removeDonation(id:number):Observable<any>{
    return this.http.delete<any>(this.configService.getURL('Donation','Delete', String(id)),
    {headers:this.configService.getHeader(), responseType: 'json'});
  }

}
