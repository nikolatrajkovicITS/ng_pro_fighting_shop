import { UserService } from '../../shared/services/user.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../shared/services/auth.service';
import 'rxjs/add/operator/map';


@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.authService.appUser$
      .map(appUser => appUser.isAdmin);                   // And with this as result in our subscirbe method we're going to get an app user object 
  }
}
