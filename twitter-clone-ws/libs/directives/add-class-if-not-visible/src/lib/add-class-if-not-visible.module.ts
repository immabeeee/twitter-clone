import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddClassIfNotVisibleDirective } from './add-class-if-not-visible.directive';

@NgModule({
  declarations: [AddClassIfNotVisibleDirective],
  imports: [CommonModule],
  exports: [AddClassIfNotVisibleDirective]
})
export class AddClassIfNotVisibleModule {}
