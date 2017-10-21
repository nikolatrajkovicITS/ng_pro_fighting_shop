import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    return this.authService.user$.map(user => {        // With map method, we're mapping an observable of firebase user to an observable of boolean. This is how we impelment AuthGuard.
      if (user) return true;                         //  if user is login return true.
    
      this.router.navigate(['/login']);
      return false;
    });                 
  }

}
