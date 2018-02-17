"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var welcome_component_1 = require("./home/welcome.component");
var product_list_component_1 = require("./products/product-list.component");
var category_list_component_1 = require("./categories/category-list.component");
var product_detail_component_1 = require("./products/product-detail.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    { path: 'products/:CatID', component: product_list_component_1.ProductListComponent },
                    { path: 'products', component: product_list_component_1.ProductListComponent },
                    { path: 'product/:SKU', component: product_detail_component_1.ProductDetailComponent },
                    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                    { path: 'categories', component: category_list_component_1.CategoryListComponent },
                    { path: '', redirectTo: 'categories', pathMatch: 'full' }
                    // { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                    // { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                welcome_component_1.WelcomeComponent,
                category_list_component_1.CategoryListComponent,
                product_list_component_1.ProductListComponent,
                product_detail_component_1.ProductDetailComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map