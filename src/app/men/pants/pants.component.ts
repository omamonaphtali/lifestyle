import { Component, OnInit } from '@angular/core';

import { ProductsModel } from '../../shared/model';

@Component({
  selector: 'app-pants',
  templateUrl: './pants.component.html'
})
export class PantsComponent implements OnInit {
  products: ProductsModel[] = [
    new ProductsModel('Floral pants with white stripe on the side', '', 15,'https://res.cloudinary.com/jaredomamo/image/upload/v1536178433/kenyan%20lifestyle/images/kl-ig-13.png'),
    new ProductsModel('Brown shorts with stripes', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178422/kenyan%20lifestyle/images/kl-ig-09.png'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
