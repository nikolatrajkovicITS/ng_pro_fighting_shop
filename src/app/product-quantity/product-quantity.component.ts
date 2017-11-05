import { Product } from '../models/product';
import { Component, Input } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
  
@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {
  @Input('product') product: Product;
  @Input('shopping-cart') shoppingCart;
  
  constructor(private shoppingCartService: ShoppingCartService) { }
  
  addToCart() {
    this.shoppingCartService.addToCart(this.product);
  }

  removeFromCart() {
    this.shoppingCartService.removeFromCart(this.product);
  }

}
  
  