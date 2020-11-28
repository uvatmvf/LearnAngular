import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items = [];

  constructor() { }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  removeFromCart(product) {
    this.items.forEach((item, index) => {
      if (item == product) {
        this.items.splice(index, 1);
      }
    });
  }
}
