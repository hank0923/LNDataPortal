import { Directive, HostListener, Input } from '@angular/core';
import * as screenfull from 'screenfull';

@Directive({
  selector: '[appFullscreen]'
})
export class FullscreenDirective {

  constructor() { }
  
  @Input() element;
  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent) {
    if (screenfull.isEnabled) {
			screenfull.toggle(this.element);
		}
	}

}


