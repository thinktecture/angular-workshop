import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { YellPipe } from './yell.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, YellPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todo';
  computedField = false;
  computedNumber = 300;

  value = 'Hallo';
  number = 3.14159;

  myColor = 'green';

  afterClicked(event: MouseEvent) {
    console.log(event.clientX);
    console.log(event.clientY);
  }

  movedMyMouse() {
    console.log('Hallo!');
  }
}
