import { Component, OnInit } from '@angular/core';

import { ProductsModel } from '../../shared/model';

@Component({
  selector: 'app-tops',
  templateUrl: './tops.component.html'
})
export class TopsComponent implements OnInit {
  products: ProductsModel[] = [
    new ProductsModel('Floral print baseball shirt', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178430/kenyan%20lifestyle/images/kl-ig-11.png'),
    new ProductsModel('Custom-printed t-shirt', '', 8, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786626/kenyan%20lifestyle/11-09-photos/kl-ig-40.png'),
    new ProductsModel('Jet print baseball shirt', '', 12, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786547/kenyan%20lifestyle/11-09-photos/kl-ig-32.png'),
    new ProductsModel('Striped blue jacket', '', 18, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536832228/kenyan%20lifestyle/11-09-photos/kl-ig-12-top.png'),
    new ProductsModel('Checked African print shirt', '', 22.50, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178389/kenyan%20lifestyle/images/kl-ig-05.png'),
    new ProductsModel('Kenyan Lifestyle t-shirt', '', 8, 'https://res.cloudinary.com/jaredomamo/image/upload/v1534851026/kenyan%20lifestyle/IMG_8827.jpg'),
    new ProductsModel('Customzied jacket', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536832709/kenyan%20lifestyle/images/kl-ig-16-top.png'),
    // new ProductsModel('', '', 15, ''),
    // new ProductsModel('', '', 15, ''),
    // new ProductsModel('', '', 15, ''),
    // new ProductsModel('', '', 15, ''),
    // new ProductsModel('', '', 15, ''),
    // new ProductsModel('', '', 15, ''),
    // new ProductsModel('', '', 15, ''),
    // new ProductsModel('', '', 15, ''),
    // new ProductsModel('', '', 15, ''),
    // new ProductsModel('', '', 15, '')
  ];

  constructor() { }

  ngOnInit() {
  }

}
