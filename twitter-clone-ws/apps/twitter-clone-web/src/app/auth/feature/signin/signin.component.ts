import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SignInFormService } from '../../data-access/form/signin-form.service';

@Component({
  selector: 'twitter-clone-ws-sign-in',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SignInComponent {
  public form: FormGroup;

  constructor(private signInFormService: SignInFormService) {
    this.form = this.signInFormService.createEmptySignInForm();
  }

  public onSubmit(): void {
    this.form.markAllAsTouched();

    if (!this.form.valid) {
      return;
    }
  }
}
