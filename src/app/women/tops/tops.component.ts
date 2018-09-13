import { Component, OnInit } from '@angular/core';

import { ProductsModel } from '../../shared/model';

@Component({
  selector: 'app-tops',
  templateUrl: './tops.component.html',
  styleUrls: ['./tops.component.css']
})
export class TopsComponent implements OnInit {
  products: ProductsModel[] = [
    new ProductsModel('African print khaki jacket', '', 18, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178445/kenyan%20lifestyle/images/kl-ig-14.png'),
    new ProductsModel('Palm print jacket', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786597/kenyan%20lifestyle/11-09-photos/kl-ig-34-top.png'),
    new ProductsModel('White "Kenyan Lifestyle" t-shirt', '', 8, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786564/kenyan%20lifestyle/11-09-photos/kl-ig-23.png'),
    new ProductsModel('Purple dashiki dress-top', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786535/kenyan%20lifestyle/11-09-photos/kl-ig-45.png'),
    new ProductsModel('Black African Print waterfall', '', 18, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786534/kenyan%20lifestyle/11-09-photos/kl-ig-33.png'),
    new ProductsModel('Black "Kenyan Lifestyle" vest', '', 8, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786532/kenyan%20lifestyle/11-09-photos/kl-ig-48.png'),
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
