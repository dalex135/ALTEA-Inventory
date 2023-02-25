import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DonateComponent } from './donate/donate.component';

@Component({
  selector: 'app-how-to-donate',
  templateUrl: './how-to-donate.component.html',
  styleUrls: ['./how-to-donate.component.css']
})
export class HowToDonateComponent {

  constructor(private router: Router,private modalService: NgbModal) { }



  goTo(sectionName:string){

  }

  goToDonate(){
    const modalRef = this.modalService.open(DonateComponent);
    // this.router.navigate(['/donate']);
  }

}
