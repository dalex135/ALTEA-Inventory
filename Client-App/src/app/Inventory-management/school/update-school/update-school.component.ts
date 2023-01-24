import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-update-school',
  templateUrl: './update-school.component.html',
  styleUrls: ['./update-school.component.css']
})
export class UpdateSchoolComponent implements OnInit {

  schoolForm: FormGroup;

  constructor(private formBuilder: FormBuilder,) {
    this.schoolForm = this.formBuilder.group({
      name: ['', Validators.nullValidator],
      principal: ['', Validators.nullValidator],
      email: ['', Validators.nullValidator],
      phoneNumber: ['', Validators.nullValidator],
      address: ['', Validators.nullValidator],
    });
  }

  ngOnInit() {

  }

  add(){

  }

}
