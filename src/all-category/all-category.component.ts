import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated/router';
import {ProductDetailComponent} from '../product-detail/product-detail.component.ts';

@Component({
    selector: 'all-category',
    templateUrl: './src/all-category/all-category.component.html',
    styleUrls: ['./src/public/app.css'],
    // directives: [ROUTER_DIRECTIVES, ProductDetailComponent],
    // providers: [ROUTER_PROVIDERS]
})
// @RouteConfig([
//     {
//         path: '/Detail',
//         name: 'Detail',
//         component: ProductDetailComponent
//     }
// ])

export class AllCategoryComponent {

}