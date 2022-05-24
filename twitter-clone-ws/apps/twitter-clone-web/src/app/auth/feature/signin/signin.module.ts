import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInFormService } from '../../data-access/form/signin-form.service';
import { UiButtonModule } from '@twitter-clone-ws/ui-button'
import { SignInComponent } from './signin.component';

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, ReactiveFormsModule, UiButtonModule],
  exports: [SignInComponent],
  providers: [SignInFormService]
})
export class SignInModule {}
