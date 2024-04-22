import { Routes } from '@angular/router';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodoListComponent } from './todo-list/todo-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
  { component: TodoListComponent, path: 'todos' },
  { component: TodoCreateComponent, path: 'todos/new' },
  { component: TodoEditComponent, path: 'todos/:id' },
  { component: NotFoundComponent, path: '**' },
];
