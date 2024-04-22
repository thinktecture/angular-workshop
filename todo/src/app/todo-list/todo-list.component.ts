import { TodoService } from './../todo.service';
import { Component } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import { Todo } from '../todo';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
  imports: [TodoComponent, CommonModule, RouterLink],
})
export class TodoListComponent {
  protected readonly todos$ = this.todoService.getAll();

  constructor(private todoService: TodoService) {}

  catchDoneEvent(todo: Todo) {
    console.log(todo);
  }
}
