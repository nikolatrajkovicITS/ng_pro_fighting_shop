import { CategoryService } from '../../../../shared/services/category.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories$;
  @Input('category') category;

  constructor(private categoryService: CategoryService) {
    this.categories$ = categoryService.getAll();
  }

  ngOnInit() {
  }

}
