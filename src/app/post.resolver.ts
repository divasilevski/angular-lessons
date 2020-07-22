import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Post, PostsService } from './posts.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PostResolver implements Resolve<Post> {
  constructor(private postsService: PostsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Post | Observable<Post> | Promise<Post> {
    return this.postsService.getById(+route.params['id']);
  }

}