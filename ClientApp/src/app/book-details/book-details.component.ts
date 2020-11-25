import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.scss']
})
/** book-details component*/
export class BookDetailsComponent implements OnInit {
  @Input() book;
  @Output() notify = new EventEmitter();

    /** book-details ctor */
  constructor() { }

    ngOnInit(): void {
        
  }

  
}
