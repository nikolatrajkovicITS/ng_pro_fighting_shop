import { Product } from '../models/product';
import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;

  constructor(private shoppingCartService: ShoppingCartService) { }

  addToCart(product: Product) {
    let cartId = localStorage.getItem('cartId');
    if (!cartId) {
      this.shoppingCartService.create().then(result => {    // This create method retruns a prommise, we can call "then" get result => 
        localStorage.setItem('cartId', result.key);         // at this point we need to store this new ID at the localStorage
              
        // Add product to cart
      });
    } else {
      // Add product to cart
    }
  }

}
