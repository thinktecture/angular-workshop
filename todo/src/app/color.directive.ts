import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appColor]',
  standalone: true
})
export class ColorDirective {
  @Input() @HostBinding('style.color') color = '';

  constructor() { }

}
