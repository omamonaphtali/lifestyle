import { Component, OnInit } from "@angular/core";

import { ProductsModel } from './model';

@Component({})
export class ProductsComponent implements OnInit {

  products: ProductsModel[] = [
    new ProductsModel('Floral pants with white stripe on the side', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178433/kenyan%20lifestyle/images/kl-ig-13.png' )
  ];

  constructor() { }

  ngOnInit() {
  }

}