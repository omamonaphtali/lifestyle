import { Component, OnInit } from '@angular/core';

import { ProductsModel } from '../../shared/model';

@Component({
  selector: 'app-pants',
  templateUrl: './pants.component.html'
})
export class PantsComponent implements OnInit {
  products: ProductsModel[] = [
    new ProductsModel('Floral pants with white stripe on the side', '', 15,'https://res.cloudinary.com/jaredomamo/image/upload/v1536833108/kenyan%20lifestyle/images/kl-ig-13-pant.png'),
    new ProductsModel('Striped brown shorts', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178422/kenyan%20lifestyle/images/kl-ig-09.png'),
    new ProductsModel('Blue pants with white vertical stripes', '', 12, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536832228/kenyan%20lifestyle/11-09-photos/kl-ig-12-pant.png'),
    // new ProductsModel('', '', 1, ''),
    // new ProductsModel('', '', 1, ''),
    // new ProductsModel('', '', 1, ''),
    // new ProductsModel('', '', 1, ''),
    // new ProductsModel('', '', 1, ''),
    // new ProductsModel('', '', 1, ''),
    // new ProductsModel('', '', 1, ''),
    // new ProductsModel('', '', 1, ''),
    // new ProductsModel('', '', 1, '')
  ];

  constructor() { }

  ngOnInit() {
  }

}
