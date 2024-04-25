import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { YellPipe } from './yell.pipe';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, CommonModule, YellPipe, TodoComponent],
})
export class AppComponent {
  title = 'todo';
  computedField = false;
  computedNumber = 300;
  value = 'Hallo';
  number = 3.14159;
  myColor = 'green';
  todoText = 'Angular lernen';
  myTodo = { name: 'Wash clothes', done: false, id: 3 };

  constructor(private elRef: ElementRef, private todoService : TodoService) {
    console.log(elRef);
    console.log(todoService.getAll());

  }

  afterClicked(event: MouseEvent) {
    console.log(event.clientX);
    console.log(event.clientY);
  }

  movedMyMouse() {
    console.log('Hallo!');
  }

  catchEvent(appEvent: MouseEvent) {
    console.log(appEvent);
  }

  catchDone(todo: any) {
    console.log(todo);
  }
}
