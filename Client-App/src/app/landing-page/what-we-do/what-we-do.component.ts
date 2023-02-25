import { Router } from '@angular/router';
import { Report } from './../../models/report';
import { Component, OnInit, Pipe, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RestService } from 'src/app/services/rest.service';
import { Gallery, GalleryItem, GalleryRef, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.css']
})
export class WhatWeDoComponent  {

  imageObject:any=[];
  storiesOfImpact: Report[] = []
  newsOrBlogs: Report[] = []
  images: GalleryItem[] = [];
  galleryId = 'mixedExample';

  constructor(private restService:RestService,
    private sanitizer: DomSanitizer,
    private router: Router,
    private gallery: Gallery) {
    this.getGallery();
    this.setReports();

   }

   setReports(){
    this.restService.getReports(1).subscribe(reports=>{
      this.storiesOfImpact = reports.reverse().slice(0, Math.min(6,reports.length));
      this.storiesOfImpact.forEach(story=>{
        this.restService.getRecipient(story.recipientForeignKey).subscribe(result=>{
          story.recipient = result;
        })
      });
      }
    )

    this.restService.getReports(2).subscribe(reports=>{
      this.newsOrBlogs = reports.reverse().slice(0, Math.min(6,reports.length));
      this.newsOrBlogs.forEach(nb=>{
        this.restService.getRecipient(nb.recipientForeignKey).subscribe(result=>{
          nb.recipient = result;
        })
      });
      }
    )
   }


   getGallery(){

    this.restService.getGallery().subscribe(gallery=>{
      const galleryRef: GalleryRef = this.gallery.ref(this.galleryId);
      gallery.forEach(photo=>{

          this.imageObject.push({
          image: this.getImageURL(photo.fileString),
          thumbImage: this.getImageURL(photo.fileString),
          title: photo.recipient.name+' - '+photo.description
        })
        this.images.push(new ImageItem({ src: photo.fileString, thumb: (String) (this.resizeBase64Image(photo.fileString, 100, 100) )}))
        galleryRef.addImage({
          src: photo.fileString,
          thumb: photo.fileString
        });
      })



    });


   }

   resizeBase64Image(base64: string, width: number, height: number): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const img = new Image();
      img.src = base64;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx!=null)
          ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL());
      };
      img.onerror = (error) => reject(error);
    });
  }

   getImageURL(fileString:string){
      const byteString = atob(fileString.split(',')[1]);
      const mimeString = 'image/jpeg';
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([ab], {type: mimeString});
      return URL.createObjectURL(blob);
   }

   goTo(sectionName:string){
    document.getElementById(sectionName)?.scrollIntoView();
   }

   openReport(i:number, reportType:string){
    var report = [];
    if (reportType=='story'){
      report = this.storiesOfImpact;
    }else{
      report = this.newsOrBlogs;
    }
    const queryParams = {
      isAllReports:false,
      photo:report[i].fileString,
      topic:report[i].topic,
      description: report[i].description,
      recipient: report[i].recipient.name,
    }
    this.router.navigate(['/report'], { queryParams });
   }

   openMore(reportType:string){
    var report = [];
    // if (reportType=='story'){
    //   report = this.storiesOfImpact;
    // }else{
    //   report = this.newsOrBlogs;
    // }
    const queryParams = {
      isAllReports:true,
      reportType: reportType
    }
    this.router.navigate(['/reports'], { queryParams });
   }


   openPDF(name:string){
    window.open('/assets/docs/'+name, '_blank');
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

