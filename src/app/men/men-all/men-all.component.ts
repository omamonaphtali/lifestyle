import { Component, OnInit } from '@angular/core';

import { ProductsModel } from '../../shared/model';

@Component({
  selector: 'app-men-all',
  templateUrl: './men-all.component.html'
})
export class MenAllComponent implements OnInit {
  products: ProductsModel[] = [
    new ProductsModel('Floral baseball shirt with matching pants', '', 25,'https://res.cloudinary.com/jaredomamo/image/upload/v1536178433/kenyan%20lifestyle/images/kl-ig-13.png'),
    new ProductsModel('Brown striped shorts with matching top', '', 23, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178422/kenyan%20lifestyle/images/kl-ig-09.png'),
    new ProductsModel('Striped blue jacket with matching pants', '', 25, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178437/kenyan%20lifestyle/images/kl-ig-12.png'),
    new ProductsModel('Black Kenyan Lifestyle sling bag', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178457/kenyan%20lifestyle/images/kl-ig-03.png'),
    new ProductsModel('Kenyan Lifestyle camoflouge baseball cap', '', 8, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786615/kenyan%20lifestyle/11-09-photos/kl-ig-41.png'),
    new ProductsModel('Black Kenyan Lifestyle t-shirt', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786626/kenyan%20lifestyle/11-09-photos/kl-ig-40.png'),
    // new ProductsModel('', '', 15, ''),
    // new ProductsModel('', '', 15, ''),
    // new ProductsModel('', '', 15, ''),
    // new ProductsModel('', '', 15, ''),
    // new ProductsModel('', '', 15, ''),
    // new ProductsModel('', '', 15, ''),
    // new ProductsModel('', '', 15, ''),
  ]

  constructor() { }

  ngOnInit() {
  }

}
