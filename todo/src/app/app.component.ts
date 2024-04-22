import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './todo.service';
import { Todo } from './todo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, TodoComponent],
  providers: [TodoService],
})
export class AppComponent {
  public show = false;
  protected readonly todos$ = this.todoService.getAll();

  constructor(
    private readonly elRef: ElementRef,
    private readonly todoService: TodoService
  ) {
    console.log('element ref', elRef);
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
