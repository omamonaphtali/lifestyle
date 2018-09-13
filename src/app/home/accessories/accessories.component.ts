import { Component, OnInit } from '@angular/core';

import { ProductsModel } from '../../shared/model';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
  products: ProductsModel[] = [
    new ProductsModel('Black "Kenyan Lifestyle" sling bag', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178457/kenyan%20lifestyle/images/kl-ig-03.png'),
    new ProductsModel('Brown leather bag with a patch of African print', '', 18, 'https://res.cloudinary.com/jaredomamo/image/upload/v1534924449/kenyan%20lifestyle/IMG_8970.jpg'),
    new ProductsModel('Black laptop backpack with tribal print', '', 18, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786619/kenyan%20lifestyle/11-09-photos/kl-ig-36.png'),
    new ProductsModel('Black & cream "Kenyan Lifestyle"  sling leather bag', '', 18, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786616/kenyan%20lifestyle/11-09-photos/kl-ig-18.png'),
    new ProductsModel('"Kenyan Lifestyle" camoflouge baseball cap', '', 10, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786615/kenyan%20lifestyle/11-09-photos/kl-ig-41.png'),
    new ProductsModel('"Kenyan Lifestyle" mavin', '', 8, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786553/kenyan%20lifestyle/11-09-photos/kl-ig-28.png'),
    new ProductsModel('"Kenyan Lifestyle" baseball cap', '', 9, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786552/kenyan%20lifestyle/11-09-photos/kl-ig-29.png'),
    new ProductsModel('Monkey backpack with tribal print', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786546/kenyan%20lifestyle/11-09-photos/kl-ig-31.png'),
    // new ProductsModel('', '', 15, ''),
    // new ProductsModel('', '', 15, ''),
    // new ProductsModel('', '', 15, ''),
    // new ProductsModel('', '', 15, ''),
  ];

  constructor() { }

  ngOnInit() {
  }

}
