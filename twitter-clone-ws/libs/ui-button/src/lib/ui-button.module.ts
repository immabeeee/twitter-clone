import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from './ui-button/ui-button.component';
import { UiSpinnerModule } from '@twitter-clone-ws/ui-spinner';

@NgModule({
  declarations: [UiButtonComponent],
  imports: [CommonModule, UiSpinnerModule],
  exports: [UiButtonComponent]
})
export class UiButtonModule {}
