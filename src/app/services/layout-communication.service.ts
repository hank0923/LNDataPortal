import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutCommunicationService {

  constructor() { }

  //sidebar collapsed
  isCollapsed = new Subject<boolean>();

  //menu title
  munuTitle = new Subject<string>();

  //selections
  productSelected = new Subject<any>();
  dateSelected = new Subject<any>();
  segmentSelected = new Subject<any>();

  selectionValue=new Subject<any>();


}
