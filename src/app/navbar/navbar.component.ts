import { Observable } from 'rxjs/Rx';
import { AppUser } from '../shared/models/app-user';
import { AuthService } from '../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shared/services/shopping-cart.service';
import { ShoppingCart } from '../shared/models/shopping-cart';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;
  
  constructor(private authService: AuthService, private shoppingCartService: ShoppingCartService) {   }

  async ngOnInit() {
    this.authService.appUser$.subscribe(appUser => this.appUser = appUser);    // We don't need to unsubscribe here, cus we have a single instance of this navbar component in the DOM.  
    this.cart$ = await this.shoppingCartService.getCart();
  }

  logout() {
    this.authService.logout();
  }
  
}

