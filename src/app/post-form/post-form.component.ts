import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()
  @ViewChild('titleInput', { static: false }) inputRef: ElementRef;

  title = '';
  text = '';

  constructor() { }

  ngOnInit(): void {
  }

  addPost() {
    if (this.text.trim() && this.title.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
        id: Date.now()
      }

      this.onAdd.emit(post);

      this.text = this.title = '';
    }
  }

  addEmptyPost() {
    const post: Post = {
      title: 'Empty',
      text: 'empty',
      id: Date.now()
    }

    this.onAdd.emit(post);

    this.text = this.title = '';
  }

  focusTitle() {
    this.inputRef.nativeElement.focus();
  }

}
