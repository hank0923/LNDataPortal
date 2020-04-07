// import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Component, OnInit, AfterViewInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

//services
import { LayoutCommunicationService } from '../../services/layout-communication.service';


//momentjs
import * as moment from 'moment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush   
})
export class HeaderComponent implements OnInit {

  
  munuTitle;
  constructor(
  	    private layoutCommunicationService: LayoutCommunicationService,
  	    private fb: FormBuilder,
  		// private cd: ChangeDetectorRef
  	) {
  		this.initForm();
  		this.detectMenuTitle();
  	}

  ngOnInit() {
  		
  }


  isCollapsed: boolean = false;
  toggleSidebarChildern(): void {
      this.isCollapsed = !this.isCollapsed;    
      this.layoutCommunicationService.isCollapsed.next(this.isCollapsed);
      // console.log(this.isCollapsed , 'childern')
  }


  detectMenuTitle(){
  	this.layoutCommunicationService.munuTitle.subscribe(munuTitle=>{
          this.munuTitle = munuTitle;
    });    
  }


  //set defalut selected date range to this week
  today;
  thisMonthStartDate;
  thisMonthEndDate;

  //select dropdown
  productData:any[] = [{value: 0, label: 'AU PG'}, {value: 1, label:'AU LA'}];
  segmentData:any[] = [{value: 0, label: 'All segments'},{value: 1, label: 'Large law'},{value: 2, label: 'Small law'}];
  

  validateForm: FormGroup
  initForm(){
  	  //set defalut selected date range to this week
  	  this.today = moment();
      this.thisMonthStartDate = this.today.clone().startOf('month').toDate();
      this.thisMonthEndDate = this.today.clone().endOf('month').toDate();
      this.validateForm = this.fb.group({
	      formLayout: 'inline',
	      products: [this.productData[0].value, [Validators.required]],
	      dateRange:  [[ this.thisMonthStartDate,  this.thisMonthEndDate], [Validators.required]],
	      segment:  [this.segmentData[0].value, [Validators.required]],
	    });
  }

   submitForm(): void {
      // console.log(this.validateForm.value, this.validateForm.valid);
      //send value to page component
      this.layoutCommunicationService.selectionValue.next(this.validateForm.value);
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }

    }

  // productChange(e){
  // 	// console.log(e)
  // 	this.layoutCommunicationService.productSelected.next(e);
  // }

  // dateChange(e){
  // 	// console.log(e)
  // 	this.layoutCommunicationService.dateSelected.next(e);
  // }

  // segmentChange(e){
  // 	// console.log(e)
  // 	this.layoutCommunicationService.segmentSelected.next(e);
  // }

}
