import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

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

  constructor(){
    const stream$ = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1500)

      setTimeout(() => {
        observer.complete();
      }, 2100)

      setTimeout(() => {
        observer.error('Something went wrong');
      }, 2000)

      setTimeout(() => {
        observer.next(2);
      }, 2500)
    })

    this.sub = stream$
      .subscribe(
        value => console.log('next', value),
        error => console.log('error', error),
        () => console.log('complite')
      )
  }

  stop() {
    this.sub.unsubscribe();
  }
}
