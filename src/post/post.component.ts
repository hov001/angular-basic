import { Component } from '@angular/core';
import { counterTypes } from 'src/constants/counter.constants';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  title: string = 'Guest';
  age: number = 26;
  counter = 0;
  counterTypes = counterTypes;
  toggle = false;

  constructor() {
    setTimeout(() => {
      this.title = 'Hovhannes';
    }, 5000);
  }

  getCount(type: string) {
    switch (type) {
      case this.counterTypes.INCREMENT:
        this.counter++;
        break;
      case this.counterTypes.DECREMENT:
        this.counter--;
        break;
    }
  }
}
