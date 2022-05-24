import { FormArray } from '@angular/forms';

export class FormUtils {
  static clearFormArray(arr: FormArray): void {
    if (arr) {
      while (arr.length !== 0) {
        arr.removeAt(0);
      }
    }
  }
}
