import {
  Component,
  Input,
  OnInit } from '@angular/core';
import { CatalogService } from '../../catalog.service';

@Component({
    selector: 'app-remove-book',
    templateUrl: './remove-book.component.html',
})
/** remove-book component*/
export class RemoveBookComponent implements OnInit {
  @Input() book;
    /** remove-book ctor */
    constructor(public catalogService: CatalogService) {

  }

  ngOnInit() {

  }

  removeBook(book) {
    this.catalogService.books.removeFromCart(this.book);
  }
}
