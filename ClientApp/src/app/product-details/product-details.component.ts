import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CatalogService } from '../../catalog.service';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html'
})
/** product-details component*/
export class ProductDetailsComponent implements OnInit {
  product;

    /** product-details ctor */
  constructor(private route: ActivatedRoute,
    private catalogService: CatalogService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

  addToCart(product) {
    this.catalogService.products.addToCart(product);
    window.alert('Your product is added to the cart');
  }
}
