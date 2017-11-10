import { ShoppingCart } from './shopping-cart';

export class Order {
  datePlaced: number;
  items: any[];

  constructor(public userId: string, public shipping: any, shoppingCart: ShoppingCart) {
    this.datePlaced = new Date().getTime();
    
    shoppingCart.items.map(i => {       // we map the items and store the result in "this.items"
        return {
          product: {
            title: i.title,
            imageUrl: i.imageUrl, 
            price: i.price
          },
          quantity: i.quantity,
          totalPrice: i.totalPrice
        }
    })
  }
}


/**
 *  Interfaces are more lightweight, they are only used by typescript compailer. 
 *  So when this is converted to JS we are not going to have any js-code for our 
 *  interfaces.
 **/
