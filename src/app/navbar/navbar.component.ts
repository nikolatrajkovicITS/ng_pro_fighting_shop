import { AppUser } from '../models/app-user';
import { AuthService } from '../auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  appUser: AppUser;
  
  constructor(private authService: AuthService) {    
    authService.appUser$.subscribe(appUser => this.appUser = appUser);    // We don't need to unsubscribe here, cus we have a single instance of this navbar component in the DOM.
  }

  logout() {
    this.authService.logout();
  }
}

