import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-product-alerts',
    templateUrl: './product-alerts.component.html'
})
/** product-alerts component*/
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();

    /** product-alerts ctor */
  constructor() {  }

  ngOnInit() {

  }

}
