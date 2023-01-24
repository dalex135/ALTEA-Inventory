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
}
