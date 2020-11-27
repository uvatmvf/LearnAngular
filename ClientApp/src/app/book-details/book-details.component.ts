import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.component.html'
})
/** book-details component*/
export class BookDetailsComponent implements OnInit {
  @Input() book;
  @Output() notify = new EventEmitter<string>();

    /** book-details ctor */
  constructor() { }

    ngOnInit(): void {
        
  }

  sendDetails() {
    if (this.book) {
      this.notify.emit(this.book.details);
    }
  }

  
}
