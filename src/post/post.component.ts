import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  title: string = 'Guest';
  age: number = 26;

  constructor() {
    setTimeout(() => {
      this.title = 'Hovhannes';
    }, 5000);
  }
}
