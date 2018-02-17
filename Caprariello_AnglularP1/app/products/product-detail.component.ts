import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';

import { IYetiProduct } from './yetiproduct';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Product Detail';
    product: IYetiProduct;
    errorMessage: string;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
                private _router: Router
                ) {
    }

    ngOnInit(): void {

        var productID: string;

        this.sub = this._route.params.subscribe(
            params => {
                
                productID = params['SKU'];
            
                //Lookup and set the selected product
                this.getProduct(productID);
        });
               
    } //end of ngOnInit

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getProduct(id: string) {
        
        var unsortedArray: IYetiProduct[]  =  
            [
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
            console.log("unsortedArray: ");
            console.table(unsortedArray);

            //Get selected product
            var selectedProduct =
                unsortedArray.find(p => p.SKU == id);
            console.dir(selectedProduct);

            //Set this found ProductID
            this.product = selectedProduct;

    } //end of getProduct funtion

    onBack(): void {
        this._router.navigate(['/products']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product Detail: ' + message;
    }
}