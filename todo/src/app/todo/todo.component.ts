import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColorDirective } from '../color.directive';
import { ClickDirective } from '../click.directive';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [JsonPipe, ColorDirective, ClickDirective],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  @Input() todo: any;

  @Output() done = new EventEmitter();

  colorToBind = 'blue';

  markAsDone() {
    this.todo.done = true;
    this.done.emit(this.todo);
  }
}
