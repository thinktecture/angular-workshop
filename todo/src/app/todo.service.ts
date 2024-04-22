import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodoService {
  url = 'https://tt-todos.azurewebsites.net/todos';

  constructor(private http: HttpClient) {}
  public todos: Todo[] = [
    { done: false, name: 'Learn Angular', id: 1 },
    { name: 'Wash my clothes', done: false, id: 2 },
    { name: 'Tidy up the room', done: true, id: 3 },
    { name: 'Mine bitcoin', done: false, id: 4 },
  ];

  create(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.url, todo);
  }

  get(todoId: string): Observable<Todo> {
    return this.http.get<Todo>(`${this.url}/${todoId}`);
  }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }

  update(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.url}/${todo.id}`, todo);
  }

  delete(todoId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${todoId}`);
  }
}
