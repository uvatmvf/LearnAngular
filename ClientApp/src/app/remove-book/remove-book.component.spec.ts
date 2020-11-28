import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { RemoveBookComponent } from './remove-book.component';
import { Book } from '../../book';

let component: RemoveBookComponent;
let fixture: ComponentFixture<RemoveBookComponent>;

describe('remove-book component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ RemoveBookComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(RemoveBookComponent);
        component = fixture.componentInstance;
    }));

  it('Should remove a book', async(() => {
    var book1 = new Book();
    book1.title = "C++ for dummies";
    component.removeBook(book1);
    component.catalogService.books.addToCart(book1);
    expect(component.catalogService.books.items.length).toEqual(1);
    component.book = book1;
    component.removeBook(book1);
    expect(component.catalogService.books.items.length).toEqual(0);
    }));
});
