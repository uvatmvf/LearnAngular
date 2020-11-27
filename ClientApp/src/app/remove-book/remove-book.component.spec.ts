/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { RemoveBookComponent } from './remove-book.component';

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

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
