import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  @Output() todoClicked = new EventEmitter<MouseEvent>();
  @Input() text = '';
  @Input() todo: any;
  @Output() doneEvent = new EventEmitter<any>();

  clickedMyButton(myEvent: MouseEvent) {
    this.todoClicked.emit(myEvent);
  }

  markAsDone() {
   this.todo.done = true;
   this.doneEvent.emit(this.todo)
  }
}
