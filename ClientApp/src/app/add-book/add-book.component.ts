import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
    selector: 'app-add-book',
    templateUrl: './add-book.component.html'
})

/** add-book component*/
export class AddBookComponent implements OnInit {
  items;
    /** add-book ctor */
    constructor(private cartService: CartService) {

  }
  ngOnInit() {
    this.items = this.cartService.getItems();
  }
}
