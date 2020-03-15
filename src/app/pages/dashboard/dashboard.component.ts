import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
  	// private router: Router
  	) {
  	 // router.events.subscribe((url:any) => this.changeBreadcrumb());
  }

  ngOnInit() {
    this.showSpinner();
  	// this.changeBreadcrumb();
    setTimeout(()=>{
    this.hideSpinner();
    },1000)
  }


  //change breadcrumb text
  // breadcrumbText: string;
  // changeBreadcrumb(): void {
  // 	if(this.router.url  === "/dashboard/overview") {
  // 		this.breadcrumbText = "Overview"
  // 	} else if(this.router.url  === "/dashboard/my-dashboard"){
  // 		this.breadcrumbText = "My Dashboard";
  // 	} 
  // }

  pageValue:string = "0"; //0: overview, 1:my-dashboard


  //loading spinner
  loading:boolean = false;
  showSpinner():void{
     this.loading = true;
  } 
  hideSpinner():void{
    this.loading = false;
  }

  
}
