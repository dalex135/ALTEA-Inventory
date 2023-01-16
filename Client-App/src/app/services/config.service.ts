import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  readonly ROOT_URL = 'http://localhost:5218';

  constructor() { }

  Get_URL(...segments: string[]) {
    var url = this.ROOT_URL;
    segments.forEach(segment=>{
      url = url + '/' + segment;
    })
    return url;
  }
}
