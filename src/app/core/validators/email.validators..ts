import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { delay, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailValidatorsService {
  private readonly emails = ['test@example.com', 'user@email.com'];
  private userExists(email: string): Observable<boolean> {
    return of(this.emails.includes(email)).pipe(delay(1000));
  }

  userValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.userExists(control.value).pipe(
        map((response) => (response ? { dublicated: true } : null))
      );
    };
  }
}
