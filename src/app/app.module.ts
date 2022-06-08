import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PostComponent } from './post/post.component';
import { AppComponent } from './app.component';
import { PostFormComponent } from './post-form/post-form.component';

@NgModule({
  declarations: [AppComponent, PostComponent, PostFormComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
