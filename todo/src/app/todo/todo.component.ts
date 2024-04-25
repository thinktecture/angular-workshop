import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ColorDirective } from '../color.directive';
import { ClickDirective } from '../click.directive';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, ColorDirective, ClickDirective],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  @Output() todoClicked = new EventEmitter<MouseEvent>();
  @Input() text = '';
  @Input({ required: true }) todo!: Todo;
  @Output() doneEvent = new EventEmitter<Todo>();

  colorToBind = 'hotpink';

  constructor(private elRef: ElementRef) {
    console.log(elRef);
  }

  clickedMyButton(myEvent: MouseEvent) {
    this.todoClicked.emit(myEvent);
  }

  markAsDone() {
    this.todo.done = true;
    this.doneEvent.emit(this.todo);
  }
}
