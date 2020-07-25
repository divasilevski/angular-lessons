import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce, bounceOutUp } from 'ng-animate'
@Component({
  selector: 'app-animate',
  template: `
    <button (click)="visible = !visible">Toggle</button>
    <hr>
    <div class="rect" [@bounce] *ngIf="visible"></div>
  `,
  styleUrls: ['./animate.component.scss'],
  animations: [
    trigger('bounce', [
      transition('void => *', useAnimation(bounce)),
      transition('* => void', useAnimation(bounceOutUp))
    ])
  ]
})
export class AnimateComponent implements OnInit {

  visible = true

  constructor() { }

  ngOnInit(): void {
  }

}
