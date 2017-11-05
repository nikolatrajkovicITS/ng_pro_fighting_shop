import { ShoppingCartItem } from './shopping-cart-item';
import { Product } from './product';

export class ShoppingCart {
  items: ShoppingCartItem[] = [];

  constructor(public itemsMap: { [productId: string]: ShoppingCartItem}) {
    for (let productId in itemsMap) {
      let item = itemsMap[productId];
      this.items.push(new ShoppingCartItem(item.product, item.quantity));
    }
  }

  getQuantity(product: Product) {                  // We are asking what is the quantity of this product
    let item = this.itemsMap[product.$key];
    return item ? item.quantity : 0;               // If we have Item return "item.quantity", otherwise return 0;
  }

  get totalPrice() {
    let sum = 0;
    for (let productId in this.items)
      sum += this.items[productId].totalPrice;
    return sum;
  }
  
  get totalItemsCount() {
    let count = 0;
    for (let productId in this.items) {
      count += this.items[productId].quantity;
    return count;
    }
  }

}