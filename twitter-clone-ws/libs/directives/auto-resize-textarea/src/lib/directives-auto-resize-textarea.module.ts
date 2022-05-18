import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoResizeTextarea } from './auto-resize-textarea.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [AutoResizeTextarea],
  exports: [AutoResizeTextarea]
})
export class DirectivesAutoResizeTextareaModule { }
