import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../catalog.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html'
})
/** cart component*/
export class CartComponent implements OnInit {
  items;
    /** cart ctor */
    constructor(private catalogService: CatalogService) {

  }

  ngOnInit() {
    this.items = this.catalogService.products.getItems();
  }
}
