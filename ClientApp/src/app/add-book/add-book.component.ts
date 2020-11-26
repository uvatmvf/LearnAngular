import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../book';
import { CatalogService } from '../../catalog.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-add-book',
    templateUrl: './add-book.component.html'
})

/** add-book component*/
export class AddBookComponent implements OnInit {
  item;
  form;
  book: Book;
  payLoad;
    /** add-book ctor */
  constructor(private catalogService: CatalogService,
    private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      author: '',
      publisher: '',
      title: '',
      year: 0
    });
  }

  ngOnInit() {
    this.book = new Book();
  }

  onSubmit(book) {
    var newBook = new Book({
      author: book.author,
      publisher: book.publisher,
      title: book.title,
      year: book.year,        
    });
      
    this.catalogService.books.addToCart(newBook);    
    this.payLoad = JSON.stringify(this.form.getRawValue());
    this.form.reset();
  }
}
