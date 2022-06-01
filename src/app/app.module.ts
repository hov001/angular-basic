import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PostComponent } from 'src/post/post.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, PostComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
