import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
    selector: 'app-product-alerts',
    templateUrl: './product-alerts.component.html'
})
/** product-alerts component*/
export class ProductAlertsComponent implements OnInit {
  @Input() product;

    /** product-alerts ctor */
    constructor() {

  }

  ngOnInit() {

  }
}
