import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html'
})
/** product-details component*/
export class ProductDetailsComponent implements OnInit {
  product;

    /** product-details ctor */
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }
}
