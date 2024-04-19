import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todo';
  public value = 'Hello';
  color = 'hotpink';

  public onClick(event: MouseEvent) {
    alert('Hello!');
  }

  public onMouseMove() {
    console.log('Hello!');
  }
}
