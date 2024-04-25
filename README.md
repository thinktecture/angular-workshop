# angular-workshop

A beginner Angular workshop

## Labs

### 0. Creating the app

```sh
ng new todo

# on the options given, choose:
# SCSS,
# Server-Side Rendering (SSR): No

cd todo

ng serve --open
# your app should open on http://localhost:4200/
```

### 1. Bindings

<details><summary>Show Labs</summary>
	
#### Interpolation
In your freshly created project, open the file `src/app/app.component.html`. You can completely remove the existing contents of this file. Now try the following bindings (one after another). 
1. `{{ 'hallo' }}`
2. `{{ 3 }}`
3. `{{ 17 + 4 }}`

Which values do you see in the preview pane?

#### Interpolation II

Now, open the file `src/app/app.component.ts` and introduce a new field called `value` within the `AppComponent` class:

```ts
export class AppComponent {
  // …
  public value = "Hello";
}
```

Bind the value of this field to the template file, by adding the following interpolation to `src/app/app.component.html`.

```html
<p>{{ value }}</p>
```

Then, `Hello` should show up in the preview pane.

#### Property Binding

1. Declare a new field called `color` on your component instance and initialize it with a CSS color value (e.g., `hotpink`))
2. Create a new `div` element in the AppComponent’s HTML template and add some text(Hint: `<div>My pink container</div>`
3. Bind the value of the field to the background color of the `div` element (Hint—add the following attribute assignment to the `div` node: `[style.backgroundColor]="color"`)

The square brackets are not a typo! They might look odd, but it will work.

#### Event Binding

1. Implement a new method `onClick` on the component instance that opens an alert box (Hint: `public onClick() { alert('Hello!'); }`)
2. Create a new `button` element in the AppComponent’s HTML template (Hint: `<button>Click me.</button>`)
3. Bind the click event of the button to the `onClick` method (Hint—add the following attribute assignment to the `button` node: `(click)="onClick()"`)
4. Implement a new method `onMouseMove` on the component instance that logs to the console (Hint: `console.log('Hello!')`)
5. Bind the `mousemove` event of the button to `onMouseMove`.

Again, the brackets are not a typo. It will work just fine.

</details>

<details><summary>Show Solution</summary>

```js
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todo';
  public value = 'Hello';
  color = 'hotpink';

  public onClick() {
    alert('Hello!');
  }

  public onMouseMove() {
    console.log('Hello!');
  }
}
```

```html
<!-- app.component.html -->
{{ "hallo" }} {{ 3 }} {{ 17 + 4 }}

<p>{{ value }}</p>

<div [style.backgroundColor]="color">My pink container</div>

<button (mousemove)="onMouseMove()" (click)="onClick()">Click me.</button>
```

```scss
// styles.scss

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
```

</details>

### 2. Bindings (Event with $event)

<details><summary>Show Labs</summary>
	
#### Event Binding (Advanced)
Adjust the implementations of `onClick()` and `onMouseMove()` to print the coordinates of the mouse (instead of printing `Hello!`)

Hints:

- `(click)="onClick($event)"`
- `public onClick(event: MouseEvent): void {}`

MouseEvent documentation: https://developer.mozilla.org/de/docs/Web/API/MouseEvent

</details>

<details><summary>Show Solution</summary>

```js
export class AppComponent  {
  public value = "Hello";
  public color = "hotpink";

  public onClick(event: MouseEvent): void {
    alert(event.clientX);
  }

  public onMouseMove(event: MouseEvent): void {
    console.log(event.clientX);
  }
}
```

```html
<button (click)="onClick($event)" (mousemove)="onMouseMove($event)">
  Click me.
</button>
```

</details>

### 3. Pipes

<details><summary>Show Labs</summary>
	
#### Interpolation

In `app.component.ts`, add `CommonModule` to the `imports` array (line 7). Now the default pipes are available.

Adjust your value binding from lab #1 to be printed as lowercase (Hint: `{{ value | lowercase }}`).

Then, adjust it to be printed as UPPERCASE.

#### Built-in pipes

Add a new numeric field to your AppComponent (e.g., `public number = 3.14159;`). Bind this field to the template using the pipes:

- `percent`
- `currency`
- `number` (showing five decimal places)

Please use three interpolations (`{{ number | … }} {{ number | … }} {{ number | … }}`).

#### Create a new pipe

Generate a pipe with the name yell:

`ng generate pipe yell`

Open the generated file `yell.pipe.ts`.

Implement the yell pipe as follows:

- The yell pipe should suffix the bound value with three exclamation marks (e.g., `value + '!!!'` or `` `${value}!!!` ``).
- The developer can optionally pass an argument to override the suffix (`args` parameter).

| Interpolation               | Value    |
| --------------------------- | -------- |
| `{{ value \| yell }}`       | Hello!!! |
| `{{ value \| yell:'???' }}` | Hello??? |

</details>

<details><summary>Show Solution</summary>

```js
// app.component.ts
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { YellPipe } from "./yell.pipe";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  imports: [CommonModule, YellPipe],
})
export class AppComponent {
  public value = "Hello";
  public color = "hotpink";
  public number = 3.14159;
  public onClick(event: MouseEvent) {
    console.log(event.clientX);
  }

  public onMouseMove(event: MouseEvent) {
    console.log(event.clientX);
  }
}
```

```js
// yell.pipe.ts
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "yell",
  standalone: true,
})
export class YellPipe implements PipeTransform {
  transform(value: string, args?: string) {
    const suffix = args || "!!!";
    const yelling = value + suffix;
    return yelling.toUpperCase();
  }
}
```

```html
<!-- app.component.ts -->
<p>{{ value | uppercase}}</p>

<p>{{ number | percent}}</p>
<p>{{ number | currency}}</p>
<p>{{ number | number}}</p>

<p>{{ value | yell}}</p>
<p>{{ value | yell: '???'}}</p>
```

</details>

### 4. Components

<details><summary>Show Labs</summary>
	
#### Create a new component

Create your first component. The new component should be named `todo`.

`ng generate component todo`

Which files have been created? What’s the selector of the new component (`selector` property of `todo.component.ts`)?

#### Use the new component in your AppComponent’s template

Open the AppComponent’s template (i.e., HTML file) and use the new component there by adding an HTML element with the new component’s selector name (e.g., if the selector is `my-selector`, add `<my-selector />` to the template).

You then need to import the todo component into the app component. You can do this automatically:
![image](https://github.com/thinktecture/angular-workshop/assets/13692904/9b843c0d-d21f-40fd-918c-484e8eb32be8)

If you like, you can duplicate this HTML element to see the idea of componentization in action.

</details>

<details><summary>Show Solution</summary>

```js
// todo.component.ts
import { Component } from "@angular/core";

@Component({
  selector: "app-todo",
  standalone: true,
  imports: [],
  templateUrl: "./todo.component.html",
  styleUrl: "./todo.component.scss",
})
export class TodoComponent {}
```

```html
<!-- app.component.html -->
<app-todo />
```

```js
// app.component.ts
...
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, YellPipe, TodoComponent],
})
export class AppComponent {
...
}

```

</details>

### 5. Input/Output

<details><summary>Show Labs</summary>
	
#### Input

1. Extend your `TodoComponent` with an `@Input()` field called `todo`.
2. Add a new `myTodo` field to the AppComponent and assign a todo object to it: `{ name: "Wash clothes", done: false, id: 3 }`
3. Pass the `myTodo` object to the `todo` component from the AppComponent’s template by using an input binding.
4. In the `TodoComponent`’s template, bind the value of the `todo` field to the UI using the interpolation and the `JSON` pipe.

#### Output

1. Extend your `TodoComponent` with an `@Output()` field called `done`.
2. Add a `button` to your `TodoComponent` and an event binding for the `click` event of this button.
   When the button is clicked, set the todo `done` property to `true` and emit the `done` event. Pass the current todo object as the event argument.
3. In the `AppComponent`’s template, bind to the `done` event using an event binding and log the finalized item to the console.

</details>

<details><summary>Show Solution</summary>

```js
// todo.component.ts

import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  @Input() todo: any;
  @Output() done = new EventEmitter();

  markAsDone() {
    this.todo.done = true;
    this.done.emit(this.todo);
  }
}
```

```html
<!-- todo.component.html -->

<p>Todo: {{todo | json }}</p>

<button (click)="markAsDone()">Mark as done</button>
```

```html
<!-- app.component.html -->

<app-todo [todo]="myTodo" (done)="onDoneClicked($event)" />
```

```js
// app.component.ts

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, TodoComponent],
})
export class AppComponent {
  public myTodo = { name: 'Wash clothes', done: false, id: 3 };

  onDoneClicked($event: any) {
    console.log($event);
  }
}
```

</details>

### 6. Directives

<details><summary>Show Labs</summary>
	
#### Create a color directive

Create a directive:

```sh
ng generate directive color
```

The directive takes `color` as an `@Input()` binding. The directive should set the color of the host element (using a `@HostBinding()`).

#### Using the directive from the component

In the component template, declare a `colorToBind` property and give it your favorite color as its value. In the component template, pass the `colorToBind` property into the `[color]` input binding.

#### Create a click directive

Create another directive (named `click`) that adds a click handler to the elements where it’s placed on. Whenever the item is clicked, log a message to the console.

Don't forget to import `ColorDirective` and `ClickDirective` to the component that uses them.

</details>

<details><summary>Show Solution</summary>

```js
// todo.component.ts
import { Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  imports: [JsonPipe, ColorDirective, ClickDirective],
  standalone: true
})
export class TodoComponent implements OnInit {

  @Input() todo: any;

  @Output() done = new EventEmitter<any>();

  colorToBind = "blue";

  markAsDone(){
    this.todo.done = true;
    this.done.emit(this.todo);
  }
}
```

```html
<!-- todo.component.html -->
<p appClick appColor color="green">Todo: {{todo | json }}</p>

<button (click)="markAsDone()">Mark as done</button>
<p appColor [color]="colorToBind">Color binding test</p>
```

```js
// color.directive.ts
import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appColor]',
  standalone: true,
})
export class ColorDirective {
  @HostBinding('style.color')
  @Input()
  color: string = '';
}

```

```js
// click.directive.ts
import { Directive, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[appClick]',
    standalone: true
})
export class ClickDirective {
    @HostListener('click', ['$event'])
    handleClick($event): void {
        console.log('a message');
    }

  constructor() {}
}
```

</details>

### 7. Dependency Injection/Services

<details><summary>Show Labs</summary>
	
#### Injecting ElementRef

In your AppComponent…

1. `import {ElementRef} from '@angular/core';`
2. Request an instance of `ElementRef` via constructor injection
3. Log the instance to the console
4. Inspect it
5. Is the instance provided by the root injector, a module or a component?

#### Create a new model interface

```
ng generate interface todo
```

Create a new model class called `todo` and add the properties:

- `name` (string)
- `done` (boolean)
- `id` (number, optional)

#### Create a new service

```
ng generate service todo
```

In your TodoService, add the following methods:

```ts
  create(todo: Todo) {}
  get(todoId: number) {}
  getAll(): Todo[] {}
  update(todo: Todo): void {}
  delete(todoId: number): void {}
```

Add the following field:

```ts
  public todos: Todo[] = [
    { done: false, name: 'Learn Angular', id: 1 },
    { name: 'Wash my clothes', done: false, id: 2 },
    { name: 'Tidy up the room', done: true, id: 3 },
    { name: 'Mine bitcoin', done: false, id: 4 },
  ];
```

Add a very basic, synchronous implementation for getAll returning the todos. Inject your TodoService into the AppComponent (don’t forget to update the imports on top). Log the list of todos to the console in the AppComponent.

</details>

<details><summary>Show Solution</summary>

```js
// app.component.ts
import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, TodoComponent],
  providers: [TodoService]
})
export class AppComponent {
  public myTodo = { name: 'Wash clothes', done: false, id: 3 };
  constructor(
    private readonly elRef: ElementRef,
    private readonly todoService: TodoService
  ) {
    console.log('element ref', elRef);
    console.log('service todos', todoService.getAll());
  }


  onDoneClicked($event: any) {
    console.log($event);
  }
}

```

```js
// todo.ts
export interface Todo {
  name: string;
  done: boolean;
  id?: number;
}
```

```js
// todo.service.ts
@Injectable()
export class TodoService {

  public todos: Todo[] = [
    { done: false, name: 'Learn Angular', id: 1 },
    { name: 'Wash my clothes', done: false, id: 2 },
    { name: 'Tidy up the room', done: true, id: 3 },
    { name: 'Mine bitcoin', done: false, id: 4 },
  ];

  constructor() { }

  create(todo: Todo) { }

  get(todoId: number)  { }

  getAll(): Todo[]  {
    return this.todos;
  }

  update(todo: Todo): void  { }

  delete(todoId: number): void  { }

}
```

</details>

### 8. Structural Directives

<details><summary>Show Labs</summary>
	
#### *ngIf

In your AppComponent’s template, add the following snippet:

```html
<button (click)="toggle()">Toggle</button>
<div *ngIf="show">I’m visible!</div>
```

On the component class, introduce a new boolean `show` field and toggle it via a new `toggle()` method (Hint: `this.show = !this.show;`). Your toggle button should work now.

#### \*ngFor

In the AppComponent, introduce a new field `todos` and assign the return value of todoService.getAll() to it.
Bind this field to the view using the `*ngFor` structural directive and an unordered list (`ul`) with one list item (`li`) for each todo. You can display t he todo name via interpolation.

```html
<!-- app.component.html -->
<ul>
  <li *ngFor="let todo of todos">{{todo.name}}{{todo.done}}</li>
</ul>
```

Now you should be able to your todo list in the browser.

Next, iterate over your TodoComponent (app-todo) instead and pass the todo via the todo property binding. Adjust the template of TodoComponent to include:

- a checkbox (input) to show the “done” state
- you can bind the markAsDone() method to the (change) Event in the checkbox
- a label to show the “name” text

```html
<!-- todo.component.html -->
<label>
  <input type="checkbox" [checked]="todo.done" (change)="markAsDone($event)" />
  {{ todo.name }}
</label>
```

</details>

<details><summary>Show Solution</summary>

```js
// app.component.ts
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  imports:[TodoComponent, CommonModule],
  standalone: true
})
export class AppComponent  {

  show = true;
  todos = [];

  constructor(private readonly elementRef: ElementRef,
  private readonly todoService: TodoService){
    console.log("elementRef from constructor", elementRef);

    this.todos = todoService.getAll();
  }

  logElementRef(){
    console.log("elementRef from console as property", this.elementRef);
  }

  toggle() {
    this.show = !this.show;
  }

  catchDoneEvent(todo: any) {
    console.log(todo)
  }

}
```

```html
<!-- app.component.html -->
<button (click)="toggle()">Toggle</button>
<div *ngIf="show">I am visible!</div>
<ul>
  <li *ngFor="let todo of todos">{{todo.name}}</li>
</ul>
<app-todo
  *ngFor="let todo of todos"
  [todo]="todo"
  (done)="catchDoneEvent($event)"
/>
```

```js

export class AppComponent {
  public myTodo = { name: 'Wash clothes', done: false, id: 3 };

  public show: boolean = false;
  todos: Todo[] = [];

  constructor(
    private readonly elRef: ElementRef,
    private readonly todoService: TodoService
  ) {
    console.log('element ref', elRef);
    console.log('service todos', todoService.getAll());
    this.todos = todoService.getAll();
  }

  onDoneClicked($event: any) {
    console.log($event);
  }

  toggle() {
    this.show = !this.show;
  }

  catchDoneEvent(todo: Todo) {
    console.log(todo);
  }
}
```

```js
// todo.service.ts
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

```

```js
// todo.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  @Input() todo: any;

  @Output() done = new EventEmitter<Todo>();

  colorToBind = 'blue';

  markAsDone() {
    this.todo.done = !this.todo.done;
    this.done.emit(this.todo);
  }
}

```

```html
<!-- todo.component.html -->
<label>
  <input type="checkbox" [checked]="todo.done" (change)="markAsDone()" />
  {{ todo.name }}
</label>
```

</details>

### 9. Observables / Http

<details><summary>Show Labs</summary>
	
#### Adjust service

Adjust your `TodoService` to now return Observables and upgrade the synchronous value in `getAll()` to an Observable (via `of()`).

```
create(todo: Todo): Observable<Todo>
get(todoId: number): Observable<Todo>
getAll(): Observable<Todo[]>
update(todo: Todo): Observable<void>
delete(todoId: number): Observable<void>`
```

#### Use HttpClient

In your `ApplicationConfig`, provide the HttpClientModule using the `provideHttpClient()` in the providers list.

Add a constructor to TodoService and request an instance of `HttpClient` and use HTTP requests instead of returning synchronous data using the following URLs. Remember you need to subscribe to the methods in the service to trigger the rest call.

| Method | Action     | URL                                        |
| ------ | ---------- | ------------------------------------------ |
| GET    | get all    | https://tt-todos.azurewebsites.net/todos   |
| GET    | get single | https://tt-todos.azurewebsites.net/todos/1 |
| POST   | create     | https://tt-todos.azurewebsites.net/todos   |
| PUT    | update     | https://tt-todos.azurewebsites.net/todos/1 |
| DELETE | delete     | https://tt-todos.azurewebsites.net/todos/1 |

</details>

<details><summary>Show Solution</summary>

```js
// app.module.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()],
};
```

```js
@Injectable()
// todo.service.ts
export class TodoService {

  private actionUrl = "https://tt-todos.azurewebsites.net/todos"

  constructor(private readonly httpClient: HttpClient) { }

  create(todo: Todo) {
    return this.httpClient.post<Todo>(this.actionUrl, todo);
  }

  get(todoId: number)  {
    return this.httpClient.get<Todo>(`${this.actionUrl}/${todoId}`);
  }

  getAll(): Observable<Todo[]>  {
    return this.httpClient.get<Todo[]>(this.actionUrl);
  }

  update(todo: Todo)  {
    return this.httpClient.put(`${this.actionUrl}/${todo.id}`, todo);
  }

  delete(todoId: number)  {
    return this.httpClient.delete(`${this.actionUrl}/${todoId}`);
  }
}
```

```js
// app.component.ts
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, CommonModule, YellPipe, TodoComponent],
})
export class AppComponent  {

  private show = true;
  todos = [];

  constructor(private readonly elementRef: ElementRef,
  private readonly todoService: TodoService){
    console.log("elementRef from constructor", elementRef);

    todoService.getAll().subscribe(todos => this.todos = todos);
  }

  catchDoneEvent(todo: any) {
    console.log(todo)
  }

  logElementRef(){
    console.log("elementRef from console as property", this.elementRef);
  }

  toggle() {
    this.show = !this.show;
  }
}
```

</details>

### 10. Async Pipe

<details><summary>Show Labs</summary>
	
#### Use Async Pipe

Use the `async` pipe instead of manually subscribing. Use the `ngOnInit()` lifecycle to update the `todos$` field.

**Instead of:**

```ts
public todos: Todo[];
```

**Use:**

```ts
public todos$: Observable<Todo[]>;
```

**Instead of:**
```ts
todoService.getAll().subscribe((todos) => (this.todos = todos));
```

**Use:**

```ts
this.todos$ = todoService.getAll();
```

**Instead of:**

```ts
<app-todo *ngFor="let todo of todos" [todo]="todo" />
```

**Use:**

```ts
<app-todo *ngFor="let todo of todos$ | async" [todo]="todo" />
```

</details>

<details><summary>Show Solution</summary>

```js
// app.component.ts
import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './todo.service';
import { Todo } from './todo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, TodoComponent],
  providers: [TodoService],
})
export class AppComponent {
  public show = false;
  protected readonly todos$ = this.todoService.getAll();

  constructor(
    private readonly elRef: ElementRef,
    private readonly todoService: TodoService
  ) {
    console.log('element ref', elRef);
  }

  onDoneClicked($event: any) {
    console.log($event);
  }

  toggle() {
    this.show = !this.show;
  }

  catchDoneEvent(todo: Todo) {
    console.log(todo);
  }
}
```

```html
<!-- app.component.html -->
<button (click)="toggle()">Toggle</button>
<div *ngIf="show">I'm visible!</div>

<ul>
  <li *ngFor="let todo of todos$ | async as todos">
    {{ todo.name }}, {{ todo.done }}
  </li>
</ul>

<div *ngIf="todos$ | async as todos">You have {{ todos.length }} todos!</div>
<app-todo
  *ngFor="let todo of todos$ | async"
  [todo]="todo"
  (done)="catchDoneEvent($event)"
/>
```

</details>

### 11. Routing

<details><summary>Show Labs</summary>
	
#### Generate components	
Add the following components:	
- TodoListComponent	
- TodoEditComponent	
- TodoCreateComponent	
- NotFoundComponent

#### Define routes

Define/assign the following routes:

- ''
- todos
- todos/:id
- todos/new
- \*\*

Redirect the default route ('') to the todo list.

#### Router outlet

Add a `<router-outlet>` to your AppComponent:

```html
<router-outlet></router-outlet>
```

Then try out different routes by typing them into the address bar.

- Which parts of the page change?
- Which parts stay the same?

#### Router links

In your AppComponent, define two links:

- Home (/todos)
- Create (/todos/new)

In TodoListComponent, request all todos and update the template:

```html
<ul>
  <li *ngFor="let todo of todos$ | async">
    <a [routerLink]="todo.id">{{ todo.name }}</a>
  </li>
</ul>
```

#### Active router links

In AppComponent, add routerLinkActive:

```html
<a routerLink="/todos" routerLinkActive="router-link-active">Home</a>
```

Add a CSS style for a.router-link-active

#### Activated route

In TodoEditComponent, listen for changes of the ActivatedRoute and retrieve the record with the given ID from the TodoService and bind it to the view as follows:

```
{{ todo$ | async | json }}
```

</details>

<details><summary>Show Solution</summary>

```js
// app.config.ts
import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withHashLocation,
} from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()],
};
```

```js
// app.routes.ts
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
```

```js
// app.component.ts
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, RouterLink],
  providers: [],
})
export class AppComponent {
  constructor() {}
}
```

```html
<!-- app.component.html -->
<div class="header">
  <a [routerLink]="['']" routerLinkActive="router-link-active">
    Home
  </a> 
  <br />
  <a [routerLink]="['todos', 'new']" routerLinkActive="router-link-active">
    Create Todo
  </a>
</div>
<router-outlet></router-outlet>
```

```scss
// app.component.scss
.header {
  display: flex;
  gap: 1rem;
}
```

```js
// todo.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  @Input() todo: any;

  @Output() done = new EventEmitter<Todo>();

  colorToBind = 'blue';

  markAsDone() {
    this.todo.done = !this.todo.done;
    this.done.emit(this.todo);
  }
}

```

```html
<!-- todo.component.html -->
<label>
  <input type="checkbox" [checked]="todo.done" (change)=markAsDone()">
  <a [routerLink]="todo.id">{{ todo.name }}</a>
</label>
```

```js
// todo-edit.component.ts
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';
import { map, of, switchMap } from 'rxjs';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-edit',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
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
}
```

```html
<!-- todo-edit.component.html -->
<p>{{ todo$ | async | json }}</p>
```

```scss
// styles.scss

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.router-link-active {
  color: green;
  font-weight: bold;
}

a {
  text-decoration: none;
}
```

</details>

### 12. Template Forms

<details><summary>Show Labs</summary>
	
#### Add a form	
 In TodoEditComponent, update the template to contain the following form. It should have two fields: A text field for editing the name and a checkbox for setting the done state. Implement onSubmit and send the updated todo to the server.

```html
<form *ngIf="todo$ | async as todo" (ngSubmit)="onSubmit(todo)">
  <!-- … -->
  <button>Submit!</button>
</form>
```

#### Validation

Now, add a required and minlength (5 characters) validation to the name field. Update the submit button to be disabled when the form is invalid:

```html
<form *ngIf="todo$ | async as todo" (ngSubmit)="onSubmit(todo)" #form="ngForm">
  <!-- … -->
  <button [disabled]="form.invalid">Submit!</button>
</form>
```

</details>

<details><summary>Show Solution</summary>

```html
<!-- todo-edit.component.html -->
<form *ngIf="todo$ | async as todo" #form="ngForm" (ngSubmit)="onSubmit(todo)">
  <input type="checkbox" [(ngModel)]="todo.done" name="done" />
  <input
    type="name"
    [(ngModel)]="todo.name"
    name="name"
    minlength="3"
    required="true"
  />
  <button type="submit" [disabled]="form.invalid">Submit!</button>
</form>
```

```js
// todo-edit.component.ts
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

```

</details>

### 13. Reactive Forms

<details><summary>Show Labs</summary>

#### Add a form

In the class `TodoCreateComponent`, inject the `NonNullableFormBuilder` and the `TodoService`. Then, create a new form group with a form control for setting the `name` and the `done` state of the newly created todo:

```ts
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly todoService = inject(TodoService);
  protected readonly formGroup = this.fb.group({
    // formControlName: ['default value']
  });
```

Then, update the template to contain the following form. It should have to fields: A text field for editing the name and a checkbox for setting the done state. Implement `onSubmit()` and create the new todo item on the server using the TodoService.

```html
<form [formGroup]="formGroup" (ngSubmit)="onSubmit(todo)">
  <!-- … -->
  <input type="text" formControlName="name" />
  <button>Submit!</button>
</form>
```

#### Validation

Now, add a required and minlength (5 characters) validation to the name field:

```ts
  name: ['', [Validators.required, Validators.minlength(5)]]
```

Update the submit button to be disabled when the form is invalid:

```html
<form [formGroup]="formGroup" (ngSubmit)="onSubmit(todo)">
  <!-- … -->
  <button [disabled]="formGroup.invalid">Submit!</button>
</form>
```

</details>

<details><summary>Show Solution</summary>

```html
<!-- todo-create.component.html -->
<form [formGroup]="formGroup" (ngSubmit)="onSubmit()">
  <input type="checkbox" formControlName="done" />
  <input type="text" formControlName="name" />
  <button [disabled]="formGroup.invalid">Submit!</button>
</form>
```

```ts
// todo-create.component.ts
import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss'],
})
export class TodoCreateComponent {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly todoService = inject(TodoService);
  protected readonly formGroup = this.fb.group({
    done: [false],
    name: ['', [Validators.required, Validators.minLength(5)]],
  });

  onSubmit() {
    this.todoService.create(this.formGroup.getRawValue()).subscribe();
  }
}
```

## Acknowledgements

A prior version of this workshop was held together with [Fabian Gosebrink](https://twitter.com/FabianGosebrink).
