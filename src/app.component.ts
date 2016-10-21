import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated/router';
import {IndexComponent} from './index/index.component.ts';
import {AllCategoryComponent} from './all-category/all-category.component.ts';
import {ProductDetailComponent}  from './product-detail/product-detail.component';
import {TabDetailComponent} from './product-detail/tabs/detail.component';
import {TabParameterComponent} from './product-detail/tabs/para.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';

@Component({
    selector: 'my-app',
    template: `<div class="text-center">
    <div class="container">
    <div class="row site-nav">
        <div class="form-inline text-left">
            <a href="">欢迎来到 Liking</a>
            <a href="">请登录</a>
            <a href="">免费注册</a>
            <a class="shop-cart pull-right" [routerLink]="['ShoppingCart']"><i class="glyphicon glyphicon-shopping-cart"></i>购物车(2)件</a>
        </div>
    </div>
    <div class="row">
        <ul class="nav navbar-nav">
            <li role="presentation"><a [routerLink]="['Index']">Index</a></li>
            <li role="presentation"><a [routerLink]="['Category']">Category</a></li>
            <li role="presentation"><a [routerLink]="['Detail',1]">Detail</a></li>
            <li role="presentation"><a [routerLink]="['ShoppingCart']">shopping cart</a></li>
        </ul>
        </div>
    </div>
    <div class="container well-lg">
     <router-outlet></router-outlet>
    </div>
    </div>
    `,
    styleUrls: ['./src/public/app.css'],
    directives: [ROUTER_DIRECTIVES, IndexComponent, AllCategoryComponent, ShoppingCartComponent],
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
    },
    {
        path: '/ShoppingCart',
        name: 'ShoppingCart',
        component: ShoppingCartComponent
    }
])

export class AppComponent {
    title = 'Welcome to liking'
}