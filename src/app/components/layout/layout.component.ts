import { Component, OnInit,Renderer2,ElementRef,AfterViewInit } from '@angular/core';
import { LayoutCommunicationService } from '../../services/layout-communication.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  
  //set default focus menu 
  munuTitle:any = "User Session Start Point";
  // sidebar toggle
  isCollapsed:boolean = false;

  constructor(
      private renderer: Renderer2,
      private elRef: ElementRef,
      private layoutCommunicationService: LayoutCommunicationService,
    ) {
      this.layoutCommunicationService.isCollapsed.subscribe(isCollapsed=>{
          this.isCollapsed = isCollapsed;
      });
    }


  ngOnInit() {
      this.layoutCommunicationService.munuTitle.next(this.munuTitle);
  }

  activeMenuIcon;
  normalMenuIcon;
  ngAfterViewInit(){
       this.activeMenuIcon = this.elRef.nativeElement.querySelectorAll('.activeMenuIcon');
       this.normalMenuIcon = this.elRef.nativeElement.querySelectorAll('.normalMenuIcon');
       // console.log(this.activeMenuIcon,  this.normalMenuIcon )
  }


  activeElement;
  setMenuIcon(e){
    
    this.activeElement = e;

    this.munuTitle = this.activeElement.elementRef.nativeElement.innerText;
    this.layoutCommunicationService.munuTitle.next(this.munuTitle);

    let activeIcon = new Promise((resolve, reject) => {
      this.activeMenuIcon.forEach((value, index, array)=>{
        this.renderer.setAttribute(value, 'class', 'display-none activeMenuIcon');
        if (index === array.length -1) return resolve();
      })
    })

    activeIcon.then(() => {
      let normalIcon = new Promise((resolve, reject) => {
        this.normalMenuIcon.forEach((value, index, array)=>{
          this.renderer.setAttribute(value, 'class', 'normalMenuIcon');
          if (index === array.length -1) return resolve();
        })
      })

      normalIcon.then(() => {
        let eleActive = this.activeElement.elementRef.nativeElement.querySelector('.activeMenuIcon');
        let eleNormal = this.activeElement.elementRef.nativeElement.querySelector('.normalMenuIcon');

        // console.log(eleActive,eleNormal)
        if(eleActive!==null && eleNormal!==null){
          this.renderer.setAttribute(eleNormal, 'class', 'display-none normalMenuIcon');
          this.renderer.setAttribute(eleActive, 'class', 'normalMenuIcon');
        }
      })

    });
  }

  


}
