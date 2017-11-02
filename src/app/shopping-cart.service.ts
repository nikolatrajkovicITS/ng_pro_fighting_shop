import { Product } from './models/product';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/take';

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    })
  }

  async getCart() {
    let cartId = await this.getOrCreateCardId();
    return this.db.object('/shopping-carts/' + cartId);
  }

  private getItem(cartId: string, productId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  private async getOrCreateCardId(): Promise<string> {
    let cartId = localStorage.getItem('cartId');
    if (cartId) return cartId;
    
    let result = await this.create();
    localStorage.setItem('cartId', result.key);         // at this point we need to store this new ID at the localStorage       
    return result.key;
  }

  async addToCart(product: Product) {
    let cartId = await this.getOrCreateCardId();
    let item$ = this.getItem(cartId, product.$key);
    item$.take(1).subscribe(item => {
      item$.update({ product: product, quantity: (item.quantity || 0) + 1 });
        item$.update({ product: product, quantity: (item.quantity || 0) + 1 });
    });
  }
}
