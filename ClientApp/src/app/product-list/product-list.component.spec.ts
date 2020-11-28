import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ProductListComponent } from './product-list.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component';
import { RouterModule } from '@angular/router';
import { BooksComponent } from '../books/books.component';

let component: ProductListComponent;
let fixture: ComponentFixture<ProductListComponent>;

describe('product-list component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ProductListComponent,
            TopBarComponent,
            ProductAlertsComponent
          ],
          imports: [BrowserModule,
            RouterModule.forRoot([
              { path: 'product-list', component: ProductListComponent },
              { path: 'product-alerts', component: ProductAlertsComponent },
              { path: 'top-bar', component: TopBarComponent }
            ])
          ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ProductListComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
