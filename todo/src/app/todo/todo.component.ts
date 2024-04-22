import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  @Input() todo: any;

  @Output() done = new EventEmitter<Todo>();

  colorToBind = 'blue';

  markAsDone() {
    this.todo.done = !this.todo.done;
    this.done.emit(this.todo);
  }
}
