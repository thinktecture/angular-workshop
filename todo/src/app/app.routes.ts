import { Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: 'todos', pathMatch: 'full' },
    { path: 'todos', component: TodoListComponent },
    { path: 'todos/new', component: TodoCreateComponent },
    { path: 'todos/:id', component: TodoEditComponent },
    { path: '**', component: NotFoundComponent },
];
