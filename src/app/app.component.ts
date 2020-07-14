import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {
      title: 'Learn components!',
      text: 'i can, i know it!',
      id: 1
    },
    {
      title: 'Next block!',
      text: 'Directives and pipes!',
      id: 2
    }
  ]

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }

  removePost(id: number) {
    this.posts = this.posts.filter(p => p.id !== id);
  }
}
