import { Component, OnInit } from '@angular/core';

import { ProductsModel } from '../../shared/model';

@Component({
  selector: 'app-women-all',
  templateUrl: './women-all.component.html',
  styleUrls: ['./women-all.component.css']
})
export class WomenAllComponent implements OnInit {
  products: ProductsModel[] = [
    new ProductsModel('ink sling bag printed Kenyan Lifestyle in black', '', 15,'https://res.cloudinary.com/jaredomamo/image/upload/v1536178405/kenyan%20lifestyle/images/kl-ig-07.png'),
    new ProductsModel('Red pants with white stripe on the side printed Kenyan Lifesyle', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178429/kenyan%20lifestyle/images/kl-ig-15.png'),
    new ProductsModel('African print khaki jacket', '', 18, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178445/kenyan%20lifestyle/images/kl-ig-14.png')
    // new ProductsModel('', '', 15, ''),
    // new ProductsModel('', '', 15, ''),
    // new ProductsModel('', '', 15, ''),
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
