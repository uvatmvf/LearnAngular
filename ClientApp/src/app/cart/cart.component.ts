import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html'
})
/** cart component*/
export class CartComponent implements OnInit {
  items;
    /** cart ctor */
    constructor(private cartService: CartService) {

  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }
}
