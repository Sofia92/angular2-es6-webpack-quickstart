/**
 * Created by sofia on 2016/10/18.
 */
import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated/router';

import{TabDetailComponent} from './tabs/detail.component';
import{TabParameterComponent} from './tabs/para.component';
import {MdTabsModule} from '@angular/material/tabs';

@Component({
    selector: 'product-detail',
    templateUrl: './src/product-detail/product-detail.component.html',
    styleUrls: ['./src/public/app.css'],
    directives: [ROUTER_DIRECTIVES, TabDetailComponent, TabParameterComponent],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
    {
        path: '/Detail/Tab-detail',
        name: 'Tab-detail',
        default: true,
        component: TabDetailComponent
    },
    {
        path: '/Detail/Tab-Para',
        name: 'Tab-Para',
        component: TabParameterComponent
    }
])
export class ProductDetailComponent {
    public tabs:Array<any> = [
        {title: 'Dynamic Title 1', content: 'Dynamic content 1'},
        {title: 'Dynamic Title 2', content: 'Dynamic content 2'},
        {title: 'Dynamic Title 3', content: 'Dynamic content 3'},
        {title: 'Dynamic Title 4', content: 'Dynamic content 4'}
    ];
}