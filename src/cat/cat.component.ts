import { Component } from '@angular/core';

@Component({
  selector: 'app-cat',
  template: `
    <div class="cat">
      <h1>cat working</h1>
    </div>
  `,
  styles: [
    `
      .cat {
        background-color: red;
      }
    `,
  ],
})
export class CatComponent {}
