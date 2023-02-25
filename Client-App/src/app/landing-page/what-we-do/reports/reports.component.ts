import { Component, ComponentFactoryResolver, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Report } from 'src/app/models/report';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  reports: Report[] = []

  
  constructor(private route: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver,
    private restService:RestService,
    private router:Router) {
      // const navBarComponentFactory = this.componentFactoryResolver.resolveComponentFactory(NavBarComponent);
      // const componentRef = this.navBarComponentContainer.createComponent(navBarComponentFactory);

     }
  ngOnInit(): void {
    
      if(this.route.snapshot.queryParamMap.get('reportType')=='story'){
        this.restService.getReports(1).subscribe(reports=>{
          this.reports = reports.reverse();
          this.reports.forEach(story=>{
            this.restService.getRecipient(story.recipientForeignKey).subscribe(result=>{
              story.recipient = result;
            })
          });
          }
        )
      }else{
        this.restService.getReports(2).subscribe(reports=>{
          this.reports = reports.reverse();
          this.reports.forEach(nb=>{
            this.restService.getRecipient(nb.recipientForeignKey).subscribe(result=>{
              nb.recipient = result;
            })
          });
          }
        )
      }
  }

  openReport(i:number, reportType:string){
    
    
    const queryParams = {
      isAllReports:false,
      photo:this.reports[i].fileString,
      topic:this.reports[i].topic,
      description: this.reports[i].description,
      recipient: this.reports[i].recipient.name,
    }
    this.router.navigate(['/report'], { queryParams });
   }
     
}


@Pipe({
  name: 'limitTo'
})
export class TruncatePipe {
  transform(value: string, args: string) : string {
    // let limit = args.length > 0 ? parseInt(args[0], 10) : 10;
    // let trail = args.length > 1 ? args[1] : '...';
    let limit = args ? parseInt(args, 10) : 10;
    let trail = '...';

    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}

