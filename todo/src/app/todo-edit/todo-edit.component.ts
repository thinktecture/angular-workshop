import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';
import { map, of, switchMap } from 'rxjs';
import { Todo } from '../todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-edit',
  standalone: true,
  imports: [CommonModule, AsyncPipe, FormsModule],
  templateUrl: './todo-edit.component.html',
  styleUrl: './todo-edit.component.scss',
})
export class TodoEditComponent implements OnInit {
  constructor(
    private readonly todoService: TodoService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  protected todo$ = of<Todo>({ name: '', done: false });

  ngOnInit() {
    this.todo$ = this.activatedRoute.params.pipe(
      map((params) => params['id'] as string),
      switchMap((id) => this.todoService.get(id))
    );
  }

  onSubmit(todo: Todo) {
    console.log(todo);
    this.todoService.update(todo).subscribe((savedTodo) => {
      console.log('saved!');
    });
  }
}
