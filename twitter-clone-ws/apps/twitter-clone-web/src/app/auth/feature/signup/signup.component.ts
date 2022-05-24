import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SignUpFormService } from '../../data-access/form/signup-form.service';

@Component({
  selector: 'twitter-clone-ws-sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpComponent {
  public form: FormGroup;

  constructor(private signUpFormService: SignUpFormService) {
    this.form = this.signUpFormService.createEmptySignUpForm();
  }

  public onSubmit(): void {
    this.form.markAllAsTouched();

    if (!this.form.valid) {
      return;
    }
  }
}
