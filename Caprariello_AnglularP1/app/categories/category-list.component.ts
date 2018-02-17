import { Component } from '@angular/core';

import { IYetiCategory } from './yeticategory';

@Component({
    selector: 'pm-categories',
    templateUrl: 'app/categories/category-list.component.html'
})
export class CategoryListComponent {
    pageTitle: string = 'Product Categories';
    categories: IYetiCategory[];
    constructor() {

    }

    ngOnInit(): void {


        var unsortedArray: IYetiCategory[] = [
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

        var sortedArray = unsortedArray.sort((a,b) => {
            if( a.CatName > b.CatName) return -1;
            else if (a.CatName > b.CatName) return 1;
            else return 0;
        })

        this.categories = sortedArray;
    }
}
