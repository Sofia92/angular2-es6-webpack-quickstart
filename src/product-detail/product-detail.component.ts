/**
 * Created by sofia on 2016/10/18.
 */
import {Component, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'product-detail',
    templateUrl: './src/product-detail/product-detail.component.html',
    styleUrls: ['./src/public/app.css'],
    encapsulation: ViewEncapsulation.None,
})

export class ProductDetailComponent {
    tabs = [
        { label: 'Tab One', content: 'This is the body of the first tab' },
        { label: 'Tab Two', content: 'This is the body of the second tab' },
        { label: 'Tab Three', content: 'This is the body of the third tab' },
    ];
    asyncTabs: Observable<any>;
    constructor() {
        this.asyncTabs = Observable.create((observer: any) => {
            setTimeout(() => {
                observer.next(this.tabs);
            }, 1000);
        });
    }
}