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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ProductListComponent = /** @class */ (function () {
    //productsInCategory: IYetiProduct[];
    function ProductListComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.pageTitle = 'Product Inventory';
    }
    ProductListComponent.prototype.ngOnInit = function () {
        console.log('In OnInit to get CatID for getByCategory');
        var catID;
        //Get incoming category code from querystring
        this.sub = this._route.params.subscribe(function (params) {
            catID = +params['CatID'];
            console.log("catID = " + catID);
        });
        console.log("catID = " + catID);
        //Fill the Array:
        //Note: This is not an asynch call!
        this.loadYetiProductsArray();
        console.log("After loadYetiProductsArray called!");
        //Filter the Array: only products in selected category
        //No incoming category id:  Show All products
        if (isNaN(catID)) {
            //this.productsInCategory = this.products;
        }
        else {
            this.products = this.products.filter(function (p) { return p.Product_Category == catID; });
            console.table(this.products);
        }
    }; //end of ngOnInit
    //private function to load the Yeti data Array
    ProductListComponent.prototype.loadYetiProductsArray = function () {
        console.log("loadYetiProductsArray function called!");
        var unsortedArray = [
            {
                //Roadie
                "SKU": "1382",
                "Product_Name": "Tundra Roadie",
                "Price": "249.99",
                "Product_Category": 1,
                "ImageName": "roadie.jpg",
            },
            {
                //Tundra 35
                "SKU": "1383",
                "Product_Name": "Tundra 35",
                "Price": "299.99",
                "Product_Category": 1,
                "ImageName": "t35.jpg",
            },
            {
                //Tundra 45
                "SKU": "1384",
                "Product_Name": "Tundra 45",
                "Price": "349.99",
                "Product_Category": 1,
                "ImageName": "t45.jpg",
            },
            {
                //Tundra 50
                "SKU": "1385",
                "Product_Name": "Tundra 50",
                "Price": "379.99",
                "Product_Category": 1,
                "ImageName": "t50.jpg",
            },
            {
                //Flip 12
                "SKU": "1537",
                "Product_Name": "Hopper Flip 12",
                "Price": "279.99",
                "Product_Category": 2,
                "ImageName": "flip12.jpg",
            },
            {
                //Two 20
                "SKU": "1538",
                "Product_Name": "Hopper Two 20",
                "Price": "299.99",
                "Product_Category": 2,
                "ImageName": "220.jpg",
            },
            {
                //Two 30
                "SKU": "1539",
                "Product_Name": "Hopper Two 30",
                "Price": "349.99",
                "Product_Category": 2,
                "ImageName": "230.jpg",
            },
            {
                //30
                "SKU": "1540",
                "Product_Name": "Hopper 30",
                "Price": "249.99",
                "Product_Category": 2,
                "ImageName": "h30.jpg",
            },
            {
                //Tank 45
                "SKU": "3881",
                "Product_Name": "Tank 45",
                "Price": "199.99",
                "Product_Category": 3,
                "ImageName": "tank45.jpg",
            },
            {
                //Tank 85
                "SKU": "3882",
                "Product_Name": "Tank 85",
                "Price": "249.99",
                "Product_Category": 3,
                "ImageName": "tank85.jpg",
            },
            {
                //10oz
                "SKU": "5440",
                "Product_Name": "10oz Lowball",
                "Price": "19.99",
                "Product_Category": 4,
                "ImageName": "10oz.jpg",
            },
            {
                //Colster
                "SKU": "5441",
                "Product_Name": "Colster",
                "Price": "29.99",
                "Product_Category": 4,
                "ImageName": "colster.jpg",
            },
            {
                //20oz 
                "SKU": "5442",
                "Product_Name": "20oz Tumbler",
                "Price": "29.99",
                "Product_Category": 4,
                "ImageName": "20oz.jpg",
            },
            {
                //18oz Bottle
                "SKU": "5443",
                "Product_Name": "18oz Bottler",
                "Price": "29.99",
                "Product_Category": 4,
                "ImageName": "18oz.jpg",
            },
            {
                //Billboard Tee
                "SKU": "6680",
                "Product_Name": "Billboard Logo Long Sleeve Shirt",
                "Price": "39.99",
                "Product_Category": 5,
                "ImageName": "billboard.jpg",
            },
            {
                //Redfish
                "SKU": "6681",
                "Product_Name": "Redfish Long Sleeve Shirt",
                "Price": "39.99",
                "Product_Category": 5,
                "ImageName": "redfish.jpg",
            },
            {
                //Drink like...
                "SKU": "6682",
                "Product_Name": "Drink Like A Fish T-Shirt",
                "Price": "24.99",
                "Product_Category": 5,
                "ImageName": "drinkfish.jpg",
            },
            {
                //Ice Days
                "SKU": "6683",
                "Product_Name": "Ice For Days T-Shirt",
                "Price": "24.99",
                "Product_Category": 5,
                "ImageName": "icedays.jpg",
            },
            {
                //Ice
                "SKU": "7864",
                "Product_Name": "Yeti Ice",
                "Price": "14.99",
                "Product_Category": 6,
                "ImageName": "ice.jpg",
            },
            {
                //Handles
                "SKU": "7865",
                "Product_Name": "Rambler Handles",
                "Price": "9.99",
                "Product_Category": 6,
                "ImageName": "handles.jpg",
            },
            {
                //divider
                "SKU": "7866",
                "Product_Name": "Dividers",
                "Price": "24.99",
                "Product_Category": 6,
                "ImageName": "divider.jpg",
            },
            {
                //Molle
                "SKU": "7867",
                "Product_Name": "Molle Zinger",
                "Price": "29.99",
                "Product_Category": 6,
                "ImageName": "molle.jpg",
            },
        ];
        var sortedArray = unsortedArray.sort(function (a, b) {
            if (a.Product_Name.toUpperCase() < b.Product_Name.toUpperCase())
                return -1;
            else if (a.Product_Name.toUpperCase() > b.Product_Name.toUpperCase())
                return 1;
            else
                return 0;
        });
        //console.table(this.products);
        this.products = sortedArray;
        console.table(this.products);
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'pm-products',
            templateUrl: 'app/products/product-list.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router])
    ], ProductListComponent);
    return ProductListComponent;
}()); //end of class
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map