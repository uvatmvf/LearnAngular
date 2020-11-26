import { Injectable } from '@angular/core';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})

export class CatalogService  {
  public products;
  public books;

  constructor() {
    this.products = new CartService();
    this.books = new CartService();
  }

}
