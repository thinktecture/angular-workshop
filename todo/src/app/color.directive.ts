import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appColor]',
  standalone: true,
})
export class ColorDirective {
  @HostBinding('style.color')
  @Input()
  public color = '';
}
