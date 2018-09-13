import { Component, OnInit } from '@angular/core';

import { ProductsModel } from '../../shared/model';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html'
})
export class AccessoriesComponent implements OnInit {
  products: ProductsModel[] = [
    new ProductsModel('Black Kenyan Lifestyle sling bag', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178457/kenyan%20lifestyle/images/kl-ig-03.png'),
    new ProductsModel('Brown leather bag with a patch of African print', '', 18, 'https://res.cloudinary.com/jaredomamo/image/upload/v1534851528/kenyan%20lifestyle/IMG_8841.jpg'),
    new ProductsModel('Black and Cream Kenyan Lifestyle sling bag', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786616/kenyan%20lifestyle/11-09-photos/kl-ig-18.png'),
    new ProductsModel('Kenyan Lifestyle camoflouge baseball cap', '', 8, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786615/kenyan%20lifestyle/11-09-photos/kl-ig-41.png'),
    new ProductsModel('Kenyan Lifestyle mavin', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786553/kenyan%20lifestyle/11-09-photos/kl-ig-28.png'),
    // new ProductsModel('', '', 15, ''),
    // new ProductsModel('', '', 15, ''),
    // new ProductsModel('', '', 15, ''),
    // new ProductsModel('', '', 15, ''),
  ];

  constructor() { }

  ngOnInit() {
  }

}

