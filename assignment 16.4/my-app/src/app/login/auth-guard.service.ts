import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

// authorization guard service which checks the session storage through auth service

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkedIn();
  }

  checkedIn() {
    if (this.authService.logIn()) {
      return true;
    } else {
      this.router.navigate(['../login']);
      return false;
    }
  }
}
