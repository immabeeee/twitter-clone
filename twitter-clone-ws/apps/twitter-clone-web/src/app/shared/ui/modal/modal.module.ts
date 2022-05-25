import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalComponent } from './modal.component';
import { UiButtonModule } from '@twitter-clone-ws/ui-button';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, UiButtonModule],
  exports: [ModalComponent]
})
export class MoodalModule {}
