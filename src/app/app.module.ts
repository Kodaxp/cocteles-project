import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostListModule } from './pages/post-list/post-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [PostListModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
