import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router
  ) { }

    tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
      console.log('tabChangeEvent => ', tabChangeEvent);
      console.log('index => ', tabChangeEvent.index);
      if (tabChangeEvent.index==4)
        this.router.navigate(['login']);
    }

}
