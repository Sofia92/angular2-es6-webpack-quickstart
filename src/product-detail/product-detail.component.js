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
/**
 * Created by sofia on 2016/10/18.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router-deprecated/router');
var detail_component_1 = require('./tabs/detail.component');
var para_component_1 = require('./tabs/para.component');
var ProductDetailComponent = (function () {
    function ProductDetailComponent() {
        this.tabs = [
            { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
            { title: 'Dynamic Title 2', content: 'Dynamic content 2' },
            { title: 'Dynamic Title 3', content: 'Dynamic content 3' },
            { title: 'Dynamic Title 4', content: 'Dynamic content 4' }
        ];
    }
    ProductDetailComponent = __decorate([
        core_1.Component({
            selector: 'product-detail',
            templateUrl: './src/product-detail/product-detail.component.html',
            styleUrls: ['./src/public/app.css'],
            directives: [router_1.ROUTER_DIRECTIVES, detail_component_1.TabDetailComponent, para_component_1.TabParameterComponent],
            providers: [router_1.ROUTER_PROVIDERS]
        }),
        router_1.RouteConfig([
            {
                path: '/Detail/Tab-detail',
                name: 'Tab-detail',
                default: true,
                component: detail_component_1.TabDetailComponent
            },
            {
                path: '/Detail/Tab-Para',
                name: 'Tab-Para',
                component: para_component_1.TabParameterComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map