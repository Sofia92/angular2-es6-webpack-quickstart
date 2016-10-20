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
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Welcome to liking';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<div class=\"text-center\">\n    <div class=\"collapse navbar-collapse navbar-responsive-collapse\">\n        <ul class=\"nav navbar-nav\">\n            <li role=\"presentation\"><a [routerLink]=\"['Index']\">Index</a></li>\n            <li role=\"presentation\"><a [routerLink]=\"['Category']\">Category</a></li>\n            <li role=\"presentation\"><a [routerLink]=\"['Detail',1]\">Detail</a></li>\n        </ul>\n    </div>\n    <div class=\"container well-lg\">\n     <router-outlet></router-outlet>\n    </div>\n    </div>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES, index_component_ts_1.IndexComponent, all_category_component_ts_1.AllCategoryComponent],
            providers: [router_1.ROUTER_PROVIDERS]
        }),
        router_1.RouteConfig([
            {
                path: '/Index',
                name: 'Index',
                component: index_component_ts_1.IndexComponent
            },
            {
                path: '/Category',
                name: 'Category',
                component: all_category_component_ts_1.AllCategoryComponent
            },
            {
                path: '/Detail/...',
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
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map