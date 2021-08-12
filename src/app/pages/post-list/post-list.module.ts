import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [PostListComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [PostListComponent]
})
export class PostListModule {}
