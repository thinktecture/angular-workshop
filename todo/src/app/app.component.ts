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
  providers: [TodoService],
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
