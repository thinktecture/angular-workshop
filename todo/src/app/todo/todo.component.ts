import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColorDirective } from '../color.directive';
import { ClickDirective } from '../click.directive';

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
  @Input() todo: any;
  @Output() doneEvent = new EventEmitter<any>();

  colorToBind = 'hotpink';

  clickedMyButton(myEvent: MouseEvent) {
    this.todoClicked.emit(myEvent);
  }

  markAsDone() {
   this.todo.done = true;
   this.doneEvent.emit(this.todo)
  }
}
