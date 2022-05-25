import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { take } from 'rxjs';
import { AuthService } from '../../data-access/auth.service';
import { SignInFormService } from '../../data-access/form/sign-in-form.service';

@Component({
  selector: 'twitter-clone-ws-sign-in',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SignInComponent {
  public form: FormGroup;
  public isSignInLoading = false;

  constructor(
    private signInFormService: SignInFormService,
    private authService: AuthService
  ) {
    this.form = this.signInFormService.createEmptySignInForm();
  }

  public onSubmit(): void {
    this.form.markAllAsTouched();

    if (!this.form.valid) {
      return;
    }

    this.isSignInLoading = true;

    this.authService
      .signIn(this.form.getRawValue())
      .pipe(take(1))
      .subscribe(({ token }) => {
        this.isSignInLoading = false;
        this.authService.handleSignInUser(token);
      });
  }
}
