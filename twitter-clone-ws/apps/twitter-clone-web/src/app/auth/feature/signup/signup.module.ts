import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SignUpComponent } from './signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpFormService } from '../../data-access/form/sign-up-form.service';
import { UiButtonModule } from '@twitter-clone-ws/ui-button'

@NgModule({
  declarations: [SignUpComponent],
  imports: [CommonModule, ReactiveFormsModule, UiButtonModule],
  exports: [SignUpComponent],
  providers: [SignUpFormService]
})
export class SignUpModule {}
