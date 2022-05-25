import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { take } from 'rxjs';
import { AuthService } from '../../data-access/auth.service';
import { SignUpFormService } from '../../data-access/form/sign-up-form.service';

@Component({
  selector: 'twitter-clone-ws-sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpComponent {
  @Output() openSignIn: EventEmitter<void> = new EventEmitter<void>();

  public form: FormGroup;
  public isRegisterLoading = false;

  constructor(
    private signUpFormService: SignUpFormService,
    private authService: AuthService
  ) {
    this.form = this.signUpFormService.createEmptySignUpForm();
  }

  public onSubmit(): void {
    this.form.markAllAsTouched();

    if (!this.form.valid) {
      return;
    }

    this.isRegisterLoading = true;

    this.authService
      .signUp(this.form.getRawValue())
      .pipe(take(1))
      .subscribe(() => {
        this.isRegisterLoading = false;
        this.openSignIn.emit();
      });
  }
}
