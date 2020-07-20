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

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get<Array<Todo>>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .subscribe(todos => {
        console.table(todos);
        this.todos = todos;
      })

  }
}

