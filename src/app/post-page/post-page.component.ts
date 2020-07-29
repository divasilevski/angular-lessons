import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../shared/interfaces';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  @Input() post: Post

  constructor() { }

  ngOnInit(): void {
  }

}
