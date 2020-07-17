import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';
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
    const intervalStream$ = interval(1000);
    
    this.sub = intervalStream$
      .pipe(
        filter(value => value % 2 === 0),
        map(value => `Mapped value ${value}`)
      )
      .subscribe((value) => {
        console.log(value);
      })

  }

  stop() {
    this.sub.unsubscribe();
  }
}
