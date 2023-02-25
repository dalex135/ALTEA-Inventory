import { Component, ViewChild } from '@angular/core';
import { NgbDropdown, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HowToDonateComponent } from '../how-to-donate/how-to-donate.component';
import { RecipientsDonorsComponent } from '../recipients-donors/recipients-donors.component';
import { WhatWeDoComponent } from '../what-we-do/what-we-do.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @ViewChild(WhatWeDoComponent)
  whatWeDoChild!: WhatWeDoComponent;

  @ViewChild(HowToDonateComponent)
  howToDonateChild!: HowToDonateComponent;

  @ViewChild(RecipientsDonorsComponent)
  recipientDonorsChild!: RecipientsDonorsComponent;

  constructor(private modalService: NgbModal) {

  }

  goToWWD(sectionName:string){
    this.whatWeDoChild.goTo(sectionName);
  }

  goToHD(sectionName:string){
    const modalRef = this.modalService.open(HowToDonateComponent);
    // this.howToDonateChild.goTo(sectionName);
  }

  goToRD(sectionName:string, mapView:number){
    this.recipientDonorsChild.goTo(sectionName, mapView);
  }

  over(drop:NgbDropdown){
    drop.open()
  }
  out(drop:NgbDropdown){
    drop.close()
  }

  private toggleButton: any;
  private sidebarVisible: boolean | undefined;

  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName('html')[0];
    // console.log(html);
    // console.log(toggleButton, 'toggle');

    setTimeout(function(){
        toggleButton.classList.add('toggled');
    }, 500);
    html.classList.add('nav-open');

    this.sidebarVisible = true;

};
sidebarClose() {
    const html = document.getElementsByTagName('html')[0];
    // console.log(html);
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
};

  sidebarToggle() {
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    if (this.sidebarVisible === false) {
        this.sidebarOpen();
    } else {
        this.sidebarClose();
    }
  }
}
