import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './todo.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, TodoComponent],
  providers: [TodoService],
})
export class AppComponent {
  public myTodo = { name: 'Wash clothes', done: false, id: 3 };

  public show: boolean = false;
  todos: Todo[] = [];

  constructor(
    private readonly elRef: ElementRef,
    private readonly todoService: TodoService
  ) {
    console.log('element ref', elRef);
    console.log('service todos', todoService.getAll());
    todoService.getAll().subscribe((todos) => (this.todos = todos));
  }

  onDoneClicked($event: any) {
    console.log($event);
  }

  toggle() {
    this.show = !this.show;
  }

  catchDoneEvent(todo: Todo) {
    console.log(todo);
  }
}
