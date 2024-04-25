import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';
import { map, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-edit.component.html',
  styleUrl: './todo-edit.component.scss',
})
export class TodoEditComponent {
  bodySizeInMeter = 0;
  weightInKg = 0;

  protected readonly todo$ = this.activatedRoute.params.pipe(
    map((params) => +params['id']),
    switchMap((id) => this.todoService.get(id))
  );

  constructor(
    private readonly todoService: TodoService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  onSubmit(todo: Todo) {
    this.todoService.update(todo).subscribe();
  }
}
