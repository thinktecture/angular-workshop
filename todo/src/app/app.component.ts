import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, TodoComponent],
})
export class AppComponent {
  public myTodo = { name: 'Wash clothes', done: false, id: 3 };

  onDoneClicked($event: any) {
    console.log($event);
  }
}
