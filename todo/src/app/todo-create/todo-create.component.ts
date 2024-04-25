import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-todo-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-create.component.html',
  styleUrl: './todo-create.component.scss'
})
export class TodoCreateComponent {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly todoService = inject(TodoService);
  protected readonly formGroup = this.fb.group({
    name: ['test', [Validators.required, Validators.minLength(3)]],
    done: [false],
  });
  
  constructor() {
    this.formGroup.valueChanges
    .pipe(debounceTime(300))
    .subscribe(value => console.log(value));
  }

  onSubmit() {
    this.todoService
    .create(this.formGroup.getRawValue())
    .subscribe();
  }
}
