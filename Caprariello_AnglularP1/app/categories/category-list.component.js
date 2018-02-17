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
var CategoryListComponent = /** @class */ (function () {
    function CategoryListComponent() {
        this.pageTitle = 'Product Categories';
    }
    CategoryListComponent.prototype.ngOnInit = function () {
        var unsortedArray = [
            {
                "CatID": 1,
                "CatName": "Tundra"
            },
            {
                "CatID": 2,
                "CatName": "Hopper"
            },
            {
                "CatID": 3,
                "CatName": "Tank"
            },
            {
                "CatID": 4,
                "CatName": "Rambler"
            },
            {
                "CatID": 5,
                "CatName": "Gear"
            },
            {
                "CatID": 6,
                "CatName": "Accesories"
            }
        ];
        var sortedArray = unsortedArray.sort(function (a, b) {
            if (a.CatName > b.CatName)
                return -1;
            else if (a.CatName > b.CatName)
                return 1;
            else
                return 0;
        });
        this.categories = sortedArray;
    };
    CategoryListComponent = __decorate([
        core_1.Component({
            selector: 'pm-categories',
            templateUrl: 'app/categories/category-list.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], CategoryListComponent);
    return CategoryListComponent;
}());
exports.CategoryListComponent = CategoryListComponent;
//# sourceMappingURL=category-list.component.js.map