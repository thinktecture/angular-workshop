import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  @Input() todo: any;
  @Output() done = new EventEmitter();

  markAsDone() {
    this.todo.done = true;
    this.done.emit(this.todo);
  }
}
