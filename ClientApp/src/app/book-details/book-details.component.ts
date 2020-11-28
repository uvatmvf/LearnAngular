import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../book';

@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.component.html'
})
/** book-details component*/
export class BookDetailsComponent implements OnInit {
  @Input() book;
  @Output() notify = new EventEmitter<string>();

    /** book-details ctor */
  constructor() {
    this.book = new Book();
  }

    ngOnInit(): void {
        
  }

  sendDetails() {
    if (this.book) {
      this.notify.emit(this.book.details);
    }
  }  
}
