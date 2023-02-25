import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Donor } from 'src/app/models/user';
import { Recipient } from 'src/app/models/recipient';
import { User } from 'src/app/models/user';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.css']
})
export class AddReportComponent implements OnInit {
  reportForm: FormGroup;

  allrecipients!: Recipient[]
  allDonors!: Donor[]
  selectedImage: any;
  reportTypes_dict = new Map<string, string>([
    ['Stories of Imapact', "StoriesOfImpact"],
    ['Blogs/News', "BlogsOrNews"],
    ['Annual Report', "AnnualReport"],
  ]);

  reportTypes =  ['Stories of Imapact', 'Blogs/News', 'Annual Report']

  constructor(private formBuilder: FormBuilder,
              private snackBar: MatSnackBar,
              private restService:RestService,
              private router: Router) {

    this.reportForm = this.formBuilder.group({
      file: [null, Validators.required],
      topic:  ['', Validators.nullValidator],
      description: ['', Validators.nullValidator],
      reportType: ['', Validators.required],
      recipient: [0, Validators.nullValidator],
      donor: [0, Validators.nullValidator],

    });

    this.restService.getAllRecipients().subscribe(recipients =>
      {
       this.allrecipients = recipients
      }
    );

    this.restService.getAllDonors().subscribe(donors =>
      {
       this.allDonors = donors
      }
    );




  }
  ngOnInit(): void {
   }

  add(){
    var report = {
      fileString: this.selectedImage,
      topic: this.reportForm.controls['topic'].value,
      description: this.reportForm.controls['description'].value,
      donorForeignKey: this.reportForm.controls['donor'].value==''? 0: this.reportForm.controls['donor'].value,
      recipientForeignKey: this.reportForm.controls['recipient'].value==''? 0: this.reportForm.controls['recipient'].value,
      reportType:this.reportTypes_dict.get(this.reportForm.controls['reportType'].value)
    }

    this.restService.saveReport(report).subscribe(result =>
        {
          if (result){
            this.snackBar.open('The report was uploaded!', 'Ok', {
              duration: 2000
            });
            this.initializeForm()
          }
          else{
            this.snackBar.open('The report was not uploaded!', 'Ok', {
              duration: 2000
            });
          }
        }
      );
  }

  initializeForm(){
    // this.reportForm = this.formBuilder.group({
    //   file: [null, Validators.required],
    //   topic:  [null, Validators.nullValidator],
    //   description: ['', Validators.nullValidator],
    //   recipient: [0, Validators.nullValidator],
    //   donor: [0, Validators.nullValidator],
    //   reportType:[0, Validators.required],

    // });

  }

  goHome(){
    this.router.navigate(['inventory']);
  }

  onFileSelected(event:any){
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
			this.selectedImage = reader.result;
		}
  }


}
