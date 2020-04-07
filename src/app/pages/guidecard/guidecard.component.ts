import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-guidecard',
  templateUrl: './guidecard.component.html',
  styleUrls: ['./guidecard.component.scss']
})
export class GuidecardComponent implements OnInit {

  constructor(
  	private fb: FormBuilder,
  ) {}

  ngOnInit() {
  	this.setup();
  }

  setup():void{
  	this.setupForm();
  }

  setupForm():void{
  	this.validateForm = this.fb.group({
      PCSI: [null, [Validators.required]],
      agree: [false]
    });
  }

  validateForm: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

}
