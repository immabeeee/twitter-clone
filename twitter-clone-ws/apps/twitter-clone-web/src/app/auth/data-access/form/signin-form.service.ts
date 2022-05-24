import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class SignInFormService {
  constructor(private formBuilder: FormBuilder) {}

  public createEmptySignInForm(): FormGroup {
    return this.formBuilder.group({
      email: this.formBuilder.control({ value: null, disabled: false }, [
        Validators.required
      ]),
      password: this.formBuilder.control({ value: null, disabled: false }, [
        Validators.required
      ])
    });
  }
}
