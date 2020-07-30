import { Component,  Input, ViewChild, ElementRef, AfterViewInit, AfterContentInit, AfterContentChecked } from '@angular/core';
import { Post } from '../../interfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements AfterContentChecked {

  @Input() post: Post
  @ViewChild('quill', {static: true}) quillRef: ElementRef
  isBigPost = false

  constructor() { }

  ngAfterContentChecked() {
   if (this.quillRef.nativeElement.offsetHeight === 120) {
     this.isBigPost = true
   }
  }

}
