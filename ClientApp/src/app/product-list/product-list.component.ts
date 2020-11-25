import { Component } from '@angular/core';

import { products } from '../products';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
/** product-list component*/
export class ProductListComponent {
  products = products;

  share() {
    window.alert('You shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale.');
  }
}

