import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppCounterService } from './services/app-counter.service';
import { LocalCounterService } from './services/local-counter.service';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LocalCounterService]
})
export class AppComponent {

  constructor(
    public appCounterService: AppCounterService,
    public localCounterService: LocalCounterService
  ) {

  }
}
