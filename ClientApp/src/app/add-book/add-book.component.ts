import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../catalog.service';

@Component({
    selector: 'app-add-book',
    templateUrl: './add-book.component.html'
})

/** add-book component*/
export class AddBookComponent implements OnInit {
  item;
  author;   
  publisher;
  title;
  year;

    /** add-book ctor */
    constructor(private catalogService: CatalogService) {

  }
  ngOnInit() {
    
  }

  addToLibrary() {
    this.catalogService.books.push({
      author: this.author,
      publisher: this.publisher,
      publishYear: this.year,
      title: this.title
    });
  }
}
