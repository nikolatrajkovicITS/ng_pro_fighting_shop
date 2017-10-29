import { CategoryService } from '../category.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [];                    // It's good practice to initialize array 
  filteredProducts: Product[] = [];
  categories$;
  category: string;

  constructor(
    private route: ActivatedRoute,                                       // We can read route parameters
    private productService: ProductService, 
    private categoryService: CategoryService) {

    productService
     .getAll()
     .switchMap(products => {
      this.products = products;
      return  route.queryParamMap;
     })
      .subscribe(params => {
        this.category = params.get('category');                             // Read category from our route paramater
     
        this.filteredProducts = (this.category) ?                           // If there is category
          this.products.filter(p => p.category === this.category) :         // we are going to call filter method on our products array 
          this.products;                                                    // : (otherwise) if you don't have category, we want return all products.
        }); 

    this.categories$ = categoryService.getAll();
  }

}
