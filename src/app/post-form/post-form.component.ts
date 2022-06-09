import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { IPost } from 'src/types/post.types';
import { v4 } from 'uuid';
import { focusVariants } from 'src/types/focus.types';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  title = '';
  text = '';

  @Output() onAdd: EventEmitter<IPost> = new EventEmitter<IPost>();

  @ViewChild('inputTitle') titleRef: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  addPost() {
    if (this.title.trim() && this.text.trim()) {
      const post: IPost = {
        id: v4(),
        title: this.title,
        text: this.text,
      };

      this.onAdd.emit(post);

      this.title = this.text = '';
    }
  }

  focusOnTitle() {
    this.titleRef.nativeElement.focus();
  }
}
