import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class AuthService implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate() {
    if (this.loginService.isAuthenticated()) {
      return true;
    }
    this.router.navigate([""]);
    return false;
  }

}
