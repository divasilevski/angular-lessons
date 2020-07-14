import { Component, OnInit, Input, ContentChild, ElementRef } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input('myPost') post: Post;
  @ContentChild('info', {static: true}) infoRef: ElementRef

  constructor() { }

  ngOnInit(): void {
    console.log(this.infoRef)
  }

}
