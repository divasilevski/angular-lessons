import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http';

export interface Todo {
  complited: boolean;
  title: string;
  id?: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todos: Array<Todo> = [];
  todoTitle = '';

  constructor(private http: HttpClient) {  }

  ngOnInit(): void {
    this.fetchTodos();
  }

  addTodo() {
    if (!this.todoTitle.trim()) return;

    const newTodo: Todo = {
      title: this.todoTitle,
      complited: false
    }

    this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo)
      .subscribe(todo => {
        this.todos.push(todo);
      })
  }

  fetchTodos() {
    this.http.get<Array<Todo>>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .subscribe(todos => {
        console.table(todos);
        this.todos = todos;
      })
  }
}

