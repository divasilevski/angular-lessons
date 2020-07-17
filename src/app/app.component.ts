import { Component } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent {
  title = "RxJS";

  sub: Subscription;

  stream$: Subject<number> = new Subject<number>();
  counter = 0;

  constructor(){
    this.sub = this.stream$
      .subscribe(value => console.log('sub', value))
  
  }

  next() {
    this.counter++;
    this.stream$.next(this.counter);
  }

  stop() {
    this.sub.unsubscribe();
  }
}
