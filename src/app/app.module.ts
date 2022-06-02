import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { FormComponent } from 'src/form/form.component';
import { PostComponent } from 'src/post/post.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, PostComponent, FormComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
