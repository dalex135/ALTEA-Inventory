import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements AfterViewInit {

  state:number = 1;
  constructor() {

  }
  ngAfterViewInit(): void {


    setTimeout(() => {this.state = this.state+1}, 5*1000);

    setTimeout(() => {this.state = this.state+1}, 10*1000);


  }


}
