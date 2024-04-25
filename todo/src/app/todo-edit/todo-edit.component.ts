import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';
import { map, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-edit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-edit.component.html',
  styleUrl: './todo-edit.component.scss'
})
export class TodoEditComponent {
  protected readonly todo$ = this.activatedRoute.params.pipe(
    map(params => +params['id']),
    switchMap(id => this.todoService.get(id)),
  );

  constructor(
    private readonly todoService: TodoService,
    private readonly activatedRoute: ActivatedRoute,
  ) {}
}
