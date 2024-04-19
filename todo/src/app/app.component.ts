import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { YellPipe } from './yell.pipe';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, YellPipe, TodoComponent],
})
export class AppComponent {
  public value = 'Hello';
  public color = 'hotpink';
  public number = 3.14159;
  public onClick(event: MouseEvent) {
    console.log(event.clientX);
  }

  public onMouseMove(event: MouseEvent) {
    console.log(event.clientX);
  }
}
