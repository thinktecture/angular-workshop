import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appClick]',
  standalone: true,
})
export class ClickDirective {
  @HostListener('click', ['$event'])
  public onClick($event: PointerEvent): void {
    console.log($event);
  }
}
