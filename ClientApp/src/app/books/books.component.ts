import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html'
})
export class BooksComponent {
  public books: Book[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Book[]>(baseUrl + 'book').subscribe(result => {
      this.books = result;
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
