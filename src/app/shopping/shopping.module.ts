import { AuthGuard } from '../shared/services/auth-guard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from 'app/shopping/components/products/products.component';
import { ShoppingCartComponent } from 'app/shopping/components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from 'app/shopping/components/check-out/check-out.component';
import { OrderSuccessComponent } from 'app/shopping/components/order-success/order-success.component';
import { MyOrdersComponent } from 'app/shopping/components/my-orders/my-orders.component';
import { ProductFilterComponent } from 'app/shopping/components/products/product-filter/product-filter.component';
import { ShoppingCartSummaryComponent } from 'app/shopping/components/shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from 'app/shopping/components/shipping-form/shipping-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'products', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
      { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuard] },
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard] }
    ])
  ],
  declarations: [
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent, 
    ProductFilterComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent
  ]
})
export class ShoppingModule { }
