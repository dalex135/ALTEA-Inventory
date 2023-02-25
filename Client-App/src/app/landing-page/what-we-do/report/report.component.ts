import { RestService } from 'src/app/services/rest.service';
import { Component, Input, NgModule, OnInit, Pipe, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import {  ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { Report } from 'src/app/models/report';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent implements OnInit {

  @ViewChild('navBarComponentContainer', { read: ViewContainerRef })
  navBarComponentContainer!: ViewContainerRef;
  description!:string|null;
  photo!:string|null;
  topic!:string|null;
  recipient!:string|null;
  reports: Report[] = []
  isAllReports: boolean = false;


  constructor(private route: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver,
    private restService:RestService,
    private router:Router) {
      // const navBarComponentFactory = this.componentFactoryResolver.resolveComponentFactory(NavBarComponent);
      // const componentRef = this.navBarComponentContainer.createComponent(navBarComponentFactory);

     }

     openReport(i:number, reportType:string){
      var report = [];

      const queryParams = {
        isAllReports:false,
        photo:this.reports[i].fileString,
        topic:this.reports[i].topic,
        description: this.reports[i].description,
        recipient: this.reports[i].recipient.name,
      }
      this.router.navigate(['/report'], { queryParams });
     }


  ngOnInit() {

    
      this.description = this.route.snapshot.queryParamMap.get('description');
      this.photo = this.route.snapshot.queryParamMap.get('photo');
      this.topic = this.route.snapshot.queryParamMap.get('topic');
      this.recipient = this.route.snapshot.queryParamMap.get('recipient');
    

  }

}

// @Pipe({
//   name: 'limitTo_'
// })
// export class TruncatePipe_ {
//   transform(value: string, args: string) : string {
//     // let limit = args.length > 0 ? parseInt(args[0], 10) : 10;
//     // let trail = args.length > 1 ? args[1] : '...';
//     let limit = args ? parseInt(args, 10) : 10;
//     let trail = '...';

//     return value.length > limit ? value.substring(0, limit) + trail : value;
//   }
// }

