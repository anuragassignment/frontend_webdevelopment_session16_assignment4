import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { RegistrationComponent } from './registration.component';

// canDeactivate Guard service which on route change if form is not empty, asks for confirmation 
@Injectable()
export class RegistrationGuardService implements CanDeactivate<RegistrationComponent> {

  constructor() { }

  canDeactivate(component: RegistrationComponent): boolean {
    if (component.courseForm.dirty) {
      return confirm('Are you sure you don’t want to save the data?');
    }
    return true;
  }
}