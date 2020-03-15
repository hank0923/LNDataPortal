import { Component, OnInit, AfterViewInit } from '@angular/core';

//L7 data visualization
import { Scene, PointLayer } from '@antv/l7';
import {Mapbox} from '@antv/l7-maps';

//momentjs
import * as moment from 'moment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(

  	) { }

  ngOnInit() {
  	
  }

  ngAfterViewInit(){
  	this.setup();
  }

  setup():void{
  	this.loadMap();
  	this.getDate().then(()=>{
  		this.formatDate();
  	})
  }

  loadMap(){
  	
	const scene = new Scene({
		  id: 'map',
		  map: new Mapbox({
		    pitch: 0,
		    style: 'dark',
		    center: [ 120.99215001469588, 10.281597225674773 ],
		    zoom: 1.66,
		    maxZoom: 10
		  })
		});
		
	scene.on('loaded', () => { 
		fetch(
		  './assets/json/map.json'
		)
	    .then(res => res.json())
	    .then(data => {
		    data.features = data.features.filter(item => {
		      return item.properties.capacity > 1000;
		    });

		    const pointLayer = new PointLayer({})
		    .source(data)
		    .shape('circle')
		    .size('capacity', [ 0, 10])
		    .color('capacity', [
		      'rgba(24,144,255,1)',
		      'rgba(24,144,255,9)',
		      'rgba(24,144,255,.8)',
		      'rgba(24,144,255,.6)',
		      'rgba(24,144,255,.4)',
		      'rgba(24,144,255,.2)'
		    ])
		    .active(true)
		    .style({
		      opacity: 0.3,
		      strokeWidth: 0,
		    });

	    	scene.addLayer(pointLayer);
	    	
	    });
	});
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  } 

  //dropdown selection
  selectedProductValue:string = "PG";
  statisticValue:string = "CSESS";

  //increase and decrease
  hasDayIncrease: boolean = true;
  hasWeekIncrease: boolean = false;
  hasMonthIncrease: boolean = true;

  //date for statistic tooltips
  todayDate = moment();
  thisWeekStartDate; 
  thisWeekEndDate;
  thisMonthStartDate;
  thisMonthEndDate;

  thisWeekDateRange;
  thisMonthDateRange;

  getDate(){ 
  	return new Promise<any>((resolve, reject) => {
	  	let today = moment();
		this.thisWeekStartDate = today.clone().startOf('week');
		this.thisWeekEndDate = today.clone().endOf('week');
		this.thisMonthStartDate = today.clone().startOf('month');
		this.thisMonthEndDate = today.clone().endOf('month');
		console.log(this.thisWeekStartDate, this.thisWeekEndDate, this.thisMonthStartDate, this.thisMonthEndDate)
		return resolve();
	});
  }

  formatDate(){
  	this.thisWeekDateRange = this.thisWeekStartDate.format("MMM D, YYYY") + " - " + this.thisWeekEndDate.format("MMM D, YYYY")
  	this.thisMonthDateRange = this.thisMonthStartDate.format("MMM D, YYYY") + " - " + this.thisMonthEndDate.format("MMM D, YYYY")
  }

}
