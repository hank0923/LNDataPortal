import { Component, OnInit, ChangeDetectionStrategy, ElementRef, AfterViewInit, ChangeDetectorRef  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

//momentjs
import * as moment from 'moment';

//services
import { LayoutCommunicationService } from '../../services/layout-communication.service';

//include d3 chart function main()
//from assets/chart-user-pattern/main.js
declare var main: any;


@Component({
  selector: 'app-user-pattern',
  templateUrl: './user-pattern.component.html',
  styleUrls: ['./user-pattern.component.scss']
})
export class UserPatternComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private elementRef: ElementRef,
    private cd: ChangeDetectorRef,
    private layoutCommunicationService: LayoutCommunicationService,
  	) {
      this.subscribeOptions();
    }



selectionValue; //header selection value
subscribeOptions(){
  this.layoutCommunicationService.selectionValue.subscribe(selectionValue=>{
      console.log(selectionValue)
      this.selectionValue = selectionValue;
      this.getSessionData();
  });
}  



  ngOnInit() {
  	this.setup();
  }


  setup(){

    this.showSpinner();

    //get options for top 6 sessions
    this.getTopSession();
    //get options for start and end Point
    this.getQueryOptions();

    setTimeout(()=>{
        this.hideSpinner();
    },1000)
  }


   //init chart
  chart:any;
  ngAfterViewInit() {
    this.chart = new main();
  }

  //toggle Tree Nodes
  isExpanded:boolean = false;
    toggleTreeNodes(){
    this.chart.toggleTreeNodes();
    this.isExpanded = !this.isExpanded;
  }

  //information popover
  popoverIsVisible_topsession:boolean = false;
  closePopover_topsession(){
    this.popoverIsVisible_topsession = false;
  }
  popoverIsVisible_query:boolean = false;
  closePopover_query(){
    this.popoverIsVisible_query = false;
  }

  

  //submit query form
  validateForm: FormGroup;
  isloading:boolean = false;
  submitForm(): void {
      console.log(this.validateForm.value, this.validateForm.valid)
      this.isloading = true;
      

      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }

      if(this.validateForm.valid){
        setTimeout(() => {
          console.log('hide');
          this.isloading = false;
          this.radioValue = null;
          this.cd.detectChanges();
        }, 1000);
      }
    }

  //show end point
  showEndPoint: boolean = false;  
    requiredChange(required: boolean): void {
      let valid = this.validateForm.get('startPoint').valid;
      if(valid){
        this.showEndPoint = true;
      }else{
        this.showEndPoint = false;
      }

   }


  //points options
  startPointOptions: Array<{ label: string; value: string }> = [];
  // endPointOptions: Array<{ label: string; value: string }> = [];
  // middlePointOptions: Array<{ label: string; value: string }> = [];
  getQueryOptions(){
    this.initQueryOptionForm();
    this.startPointOptions = [{label: "PG Home", value:"home"}, {label: "Document", value:"document"}];
    // this.endPointOptions = [{label: "PG Home", value:"home"}, {label: "Document", value:"document"}];
    // this.middlePointOptions = [{label: "PG Home", value:"home"}, {label: "Document", value:"document"}];
  }

  initQueryOptionForm(){
    this.validateForm = this.fb.group({
      startPoint: [null, [Validators.required]],
      // endPoint: [null, null],
      // middlePoint: [null, null]
    });
  }

  //top 6 options
  //radio selection for top 6 user sessions
  radioValue:string;
  topSession: Array<{ title: string; number: string; value:string }> = [];
  getTopSession(){
    this.topSession = [
      {title:"PG Home", number:"78%", value:"A"},
      {title:"Document", number:"12%", value:"B"},
      {title:"Subtopic", number:"4%", value:"C"},
      {title:"TOC", number:"3%", value:"D"},
      {title:"Topic", number:"2%", value:"E"},
      {title:"Login", number:"1%", value:"F"},
    ]
    this.radioValue = 'A';
    this.getSessionData();
  }

  //format session count
  totalSessionNumber:any;
  pageSessionNumber:any;
  formatNumber(number){
    return Number((number).toFixed(1)).toLocaleString();
  }



  //get sessions data
  getSessionData(){
    
    // console.log(this.radioValue);
    this.showSpinner();
    this.totalSessionNumber = 23304;
    this.pageSessionNumber = 6784;
    this.totalSessionNumber = this.formatNumber(this.totalSessionNumber);
    this.pageSessionNumber = this.formatNumber(this.pageSessionNumber);

    setTimeout(() => {
          this.hideSpinner();
    }, 1000);


  }

  //loading spinner
  loading:boolean = false;
  showSpinner():void{
     this.loading = true;
  } 
  hideSpinner():void{
    this.loading = false;
  }


  //add class to wrapper
  isFullScreen:boolean = false;
  toggleFullScreenClass(){
    this.isFullScreen = !this.isFullScreen
  }






}
