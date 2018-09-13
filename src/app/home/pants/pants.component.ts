import { Component, OnInit } from '@angular/core';

import { ProductsModel } from '../../shared/model';

@Component({
  selector: 'app-pants',
  templateUrl: './pants.component.html',
  styleUrls: ['./pants.component.css']
})
export class PantsComponent implements OnInit {
  products: ProductsModel[] = [
    new ProductsModel('Floral pants with white stripe on the side', '', 15,'https://res.cloudinary.com/jaredomamo/image/upload/v1536833108/kenyan%20lifestyle/images/kl-ig-13-pant.png'),
    new ProductsModel('Striped brown shorts', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178422/kenyan%20lifestyle/images/kl-ig-09.png'),
    new ProductsModel('Palm print pant', '', 12, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786529/kenyan%20lifestyle/11-09-photos/kl-ig-34-pant.png'),
    new ProductsModel('Blue pants with white vertical stripes', '', 12, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536832228/kenyan%20lifestyle/11-09-photos/kl-ig-12-pant.png'),
    new ProductsModel('Red pants with white stripe on the side printed Kenyan Lifesyle', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178429/kenyan%20lifestyle/images/kl-ig-15.png'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
