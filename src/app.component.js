"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router-deprecated/router');
var index_component_ts_1 = require('./index/index.component.ts');
var all_category_component_ts_1 = require('./all-category/all-category.component.ts');
var product_detail_component_1 = require('./product-detail/product-detail.component');
var detail_component_1 = require('./product-detail/tabs/detail.component');
var para_component_1 = require('./product-detail/tabs/para.component');
var shopping_cart_component_1 = require('./shopping-cart/shopping-cart.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Welcome to liking';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<div class=\"text-center\">\n    <div class=\"container\">\n    <div class=\"row site-nav\">\n        <div class=\"form-inline text-left\">\n            <a href=\"\">\u6B22\u8FCE\u6765\u5230 Liking</a>\n            <a href=\"\">\u8BF7\u767B\u5F55</a>\n            <a href=\"\">\u514D\u8D39\u6CE8\u518C</a>\n            <a class=\"shop-cart pull-right\" [routerLink]=\"['ShoppingCart']\"><i class=\"glyphicon glyphicon-shopping-cart\"></i>\u8D2D\u7269\u8F66(2)\u4EF6</a>\n        </div>\n    </div>\n    <div class=\"row\">\n        <ul class=\"nav navbar-nav\">\n            <li role=\"presentation\"><a [routerLink]=\"['Index']\">Index</a></li>\n            <li role=\"presentation\"><a [routerLink]=\"['Category',1]\">Category</a></li>\n            <!--<li role=\"presentation\"><a [routerLink]=\"['Detail',1]\">Detail</a></li>-->\n            <li role=\"presentation\"><a [routerLink]=\"['ShoppingCart']\">shopping cart</a></li>\n        </ul>\n        </div>\n    </div>\n    <div class=\"container well-lg\">\n     <router-outlet></router-outlet>\n    </div>\n    </div>\n    ",
            styleUrls: ['./src/public/app.css'],
            directives: [router_1.ROUTER_DIRECTIVES, index_component_ts_1.IndexComponent, all_category_component_ts_1.AllCategoryComponent, shopping_cart_component_1.ShoppingCartComponent],
            providers: [router_1.ROUTER_PROVIDERS]
        }),
        router_1.RouteConfig([
            {
                path: '/Index',
                name: 'Index',
                component: index_component_ts_1.IndexComponent,
                useAsDefault: true
            },
            {
                path: '/Category/...',
                name: 'Category',
                component: all_category_component_ts_1.AllCategoryComponent
            },
            {
                path: '/Category/Detail/...',
                name: 'Detail',
                component: product_detail_component_1.ProductDetailComponent
            },
            {
                path: '/Detail/Tab-detail',
                name: 'Tab-detail',
                component: detail_component_1.TabDetailComponent
            },
            {
                path: '/Detail/Tab-Para',
                name: 'Tab-Para',
                component: para_component_1.TabParameterComponent
            },
            {
                path: '/ShoppingCart',
                name: 'ShoppingCart',
                component: shopping_cart_component_1.ShoppingCartComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map