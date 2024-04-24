import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appClick]',
  standalone: true
})
export class ClickDirective {

  constructor() { }

  @HostListener('click')
  clicked() {
    console.log('Clicked!');
  }

}
