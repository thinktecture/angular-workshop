import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todo';
  computedField = false;
  computedNumber = 300;

  value = 'Hallo';

  myColor = 'green';

  afterClicked(event: MouseEvent) {
    console.log(event.clientX);
    console.log(event.clientY);
  }

  movedMyMouse() {
    console.log('Hallo!');
  }
}
