import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor() {}
  public todos: Todo[] = [{ done: false, name: 'Learn Angular', id: 1 }];

  create(todo: Todo) {}
  get(todoId: number) {}
  getAll(): Todo[] {
    return this.todos;
  }
  update(todo: Todo): void {}
  delete(todoId: number): void {}
}
