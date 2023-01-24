import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-device',
  templateUrl: './update-device.component.html',
  styleUrls: ['./update-device.component.css']
})
export class UpdateDeviceComponent implements OnInit {

  deviceForm: FormGroup;

  constructor(private formBuilder: FormBuilder,) {
    this.deviceForm = this.formBuilder.group({
      description: ['', Validators.nullValidator],
      serialNumber: ['', Validators.nullValidator],
      quantity: ['', Validators.nullValidator],
      type: ['', Validators.nullValidator],
      brand: ['', Validators.nullValidator],
      school: ['', Validators.nullValidator],
    });
  }

  ngOnInit() {

  }

  add(){

  }

}
