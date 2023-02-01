import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent  {

  title = 'My first AGM project';
  lat = 6.9271;
  lng = 79.8612;

  lat1 = 45.1516;
  lng1 = 10.0527;

  apiLoaded = false;

  constructor(
    private router: Router
  ) {
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
   }

    tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
      console.log('tabChangeEvent => ', tabChangeEvent);
      console.log('index => ', tabChangeEvent.index);
      if (tabChangeEvent.index==4)
        this.router.navigate(['login']);
    }

}
