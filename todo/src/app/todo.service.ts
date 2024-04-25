import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private actionUrl = "https://tt-todos.azurewebsites.net/todos"

  constructor(private httpClient: HttpClient) {}

  create(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(this.actionUrl, todo);
  }
  
  get(todoId: number): Observable<Todo> {
    return this.httpClient.get<Todo>(`${this.actionUrl}/${todoId}`);
  }

  getAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.actionUrl);
  }

  update(todo: Todo): Observable<Todo> {
    return this.httpClient.put<Todo>(`${this.actionUrl}/${todo.id}`, todo);
  }

  delete(todoId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.actionUrl}/${todoId}`);
  }
}
