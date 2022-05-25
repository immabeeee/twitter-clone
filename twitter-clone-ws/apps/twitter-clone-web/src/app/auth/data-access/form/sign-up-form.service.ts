import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class SignUpFormService {
  constructor(private formBuilder: FormBuilder) {}

  public createEmptySignUpForm(): FormGroup {
    return this.formBuilder.group({
      firstName: this.formBuilder.control({ value: null, disabled: false }, [
        Validators.required
      ]),
      lastName: this.formBuilder.control({ value: null, disabled: false }, [
        Validators.required
      ]),
      email: this.formBuilder.control({ value: null, disabled: false }, [
        Validators.required
      ]),
      password: this.formBuilder.control({ value: null, disabled: false }, [
        Validators.required
      ])
    });
  }
}
