import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

import { Product } from '../models/product';
import { ProductService } from '../product.service';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];                    // It's good practice to initialize array 
  filteredProducts: Product[] = [];
  category: string;
  cart: any;
  subscription: Subscription;

  constructor(
    route: ActivatedRoute,                                       // We can read route parameters
    productService: ProductService,
    private shoppingCartService: ShoppingCartService
  ) {
    productService
     .getAll()
     .switchMap(products => {
      this.products = products;
      return route.queryParamMap;
     })
     .subscribe(params => {
       this.category = params.get('category');                             // Read category from our route paramater

      this.filteredProducts = (this.category) ?                           // If there is category
        this.products.filter(p => p.category === this.category) :         // we are going to call filter method on our products array 
        this.products;                                                    // : (otherwise) if you don't have category, we want return all products.
      });
  }

  async ngOnInit() {
   this.subscription = (await this.shoppingCartService.getCart())
     .subscribe(cart => this.cart = cart);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
