import { Post } from './../interfaces';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPosts'
})

export class SearchPipe implements PipeTransform {
  transform(posts: Post[], search = ''): Post[] {

    posts.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

    if (!search.trim()) return posts

    return posts
      .filter(post => {
        return post.title.toLowerCase().includes(search.toLowerCase())
      })
  }
}