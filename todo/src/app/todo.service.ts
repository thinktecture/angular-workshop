import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor() {}
  public todos: Todo[] = [
    { done: false, name: 'Learn Angular', id: 1 },
    { name: 'Wash my clothes', done: false, id: 2 },
    { name: 'Tidy up the room', done: true, id: 3 },
    { name: 'Mine bitcoin', done: false, id: 4 },
  ];

  create(todo: Todo) {}

  get(todoId: number) {}

  getAll(): Todo[] {
    return this.todos;
  }

  update(todo: Todo): void {}

  delete(todoId: number): void {}
}
