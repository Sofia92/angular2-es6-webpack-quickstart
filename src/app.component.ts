import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated/router';
import {IndexComponent} from './index/index.component.ts';
import {AllCategoryComponent} from './all-category/all-category.component.ts';
import {ProductDetailComponent}  from './product-detail/product-detail.component';
import {TabDetailComponent} from './product-detail/tabs/detail.component';
import {TabParameterComponent} from './product-detail/tabs/para.component';

@Component({
    selector: 'my-app',
    template: `<div class="text-center">
    <div class="container">
        <ul class="nav navbar-nav">
            <li role="presentation"><a [routerLink]="['Index']">Index</a></li>
            <li role="presentation"><a [routerLink]="['Category']">Category</a></li>
            <li role="presentation"><a [routerLink]="['Detail',1]">Detail</a></li>
        </ul>
    </div>
    <div class="container well-lg">
     <router-outlet></router-outlet>
    </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES, IndexComponent, AllCategoryComponent],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
    {
        path: '/Index',
        name: 'Index',
        component: IndexComponent
    },
    {
        path: '/Category',
        name: 'Category',
        component: AllCategoryComponent
    },
    {
        path: '/Detail/...',
        name: 'Detail',
        component: ProductDetailComponent
    },
    {
        path: '/Detail/Tab-detail',
        name: 'Tab-detail',
        component: TabDetailComponent
    },
    {
        path: '/Detail/Tab-Para',
        name: 'Tab-Para',
        component: TabParameterComponent
    }
])

export class AppComponent {
    title = 'Welcome to liking'
}