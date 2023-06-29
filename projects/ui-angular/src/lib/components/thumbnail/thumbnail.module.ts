import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThumbnailComponent } from './thumbnail.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
  declarations: [ThumbnailComponent],
  exports: [ThumbnailComponent],
  imports: [CommonModule, IconModule],
})
export class ThumbnailModule {}
