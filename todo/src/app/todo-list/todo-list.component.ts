import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  protected readonly todos$ = this.todoService.getAll();

  constructor(private readonly todoService: TodoService) {}
}
