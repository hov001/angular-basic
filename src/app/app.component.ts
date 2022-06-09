import { Component } from '@angular/core';
import { IPost } from 'src/types/post.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts: IPost[] = [];

  addPost(post: IPost) {
    this.posts.unshift(post);
  }
}
