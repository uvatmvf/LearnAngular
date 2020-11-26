import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../book';
import { CatalogService } from '../../catalog.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-add-book',
    templateUrl: './add-book.component.html'
})

/** add-book component*/
export class AddBookComponent implements OnInit {
  item;
  form: FormGroup;
  book: Book;
  payLoad;
    /** add-book ctor */
    constructor(private catalogService: CatalogService) {

  }

  ngOnInit() {
    this.book = new Book();
    const group: any = {};
    group['newBook'] = this.book;
    this.form = new FormGroup(group);
  }

  addToLibrary() {
    var newBook = new Book({
      author: this.book.author,
      publisher: this.book.publisher,
      title: this.book.title,
      year: this.book.year,        
    });
      
    this.catalogService.books.addToCart(newBook);    
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
