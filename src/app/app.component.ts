import { Component } from '@angular/core';
import { IPost } from 'src/types/post.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts: IPost[] = [
    { id: 1, title: 'Title 1', text: 'Text 1' },
    { id: 2, title: 'Title 2', text: 'Text 2' },
    { id: 3, title: 'Title 3', text: 'Text 3' },
  ];
}
