import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Dynamic title';
  number = 42;
  array = [1, 2, 3];

  obj = { a: 1, b: { c: 2 } };
  img = 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png';
  img2 = 'https://learn.javascript.ru/courses/list/angular.png';

  inputValue = '';

  constructor() {
    // setTimeout(() => {
    //   this.img = this.img2;
    // }, 5000)
  }

  onInput(event: KeyboardEvent) {
    this.inputValue = (<HTMLInputElement>event.target).value;
  }

  onClick() {
    this.inputValue = '';
  }

  onBlur(str: string) {
    this.inputValue = str;
  }
}
