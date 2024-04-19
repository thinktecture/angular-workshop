import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public value = 'Hello';
  public color = 'hotpink';

  public onClick(event: MouseEvent) {
    console.log(event.clientX);
  }

  public onMouseMove(event: MouseEvent) {
    console.log(event.clientX);
  }
}
