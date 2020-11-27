import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatalogService } from '../../catalog.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html'
})
export class BooksComponent {
  public books: Book[];
  showAddTop: boolean;

  constructor(http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private catalogService: CatalogService) {
    
    http.get<Book[]>(baseUrl + 'book').subscribe(result => {
      this.books = result;
      // TODO: Fix refresh browser issue that kills the view
      if (this.catalogService.books.getItems().length == 0) {
        for (let book of this.books) {
          this.catalogService.books.addToCart(book);
        }
      }
      this.books = this.catalogService.books.getItems();
    }, error => console.error(error));
    
  }

  onNotify(details: string) {
    window.alert(details);
  }
}

interface Book {
  author: string;
  title: string;
  publisher: string;
  publishYear: number;
  details: string;
}
