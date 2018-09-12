import { Component, OnInit } from '@angular/core';

import { ProductsModel } from '../../shared/model';

@Component({
  selector: 'app-home-all',
  templateUrl: './home-all.component.html',
  styleUrls: ['./home-all.component.css']
})
export class HomeAllComponent implements OnInit {
  products: ProductsModel[] = [
    new ProductsModel('Floral pants with white stripe on the side', '', 15,'https://res.cloudinary.com/jaredomamo/image/upload/v1536178433/kenyan%20lifestyle/images/kl-ig-13.png'),
    new ProductsModel('Bold Print Shirt', '', 20, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178405/kenyan%20lifestyle/images/kl-ig-08.png'),
    new ProductsModel('African print khaki jacket', '', 18, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178445/kenyan%20lifestyle/images/kl-ig-14.png'),
    new ProductsModel('Retro-Print Shirt', '', 23.50, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178406/kenyan%20lifestyle/images/kl-ig-02.png'),
    new ProductsModel('Brown shorts with stripes', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178422/kenyan%20lifestyle/images/kl-ig-09.png'),
    new ProductsModel('Striped blue jacket', '', 18, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178437/kenyan%20lifestyle/images/kl-ig-12.png'),
    new ProductsModel('Red pants with white stripe on the side printed Kenyan Lifesyle', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178429/kenyan%20lifestyle/images/kl-ig-15.png'),
    new ProductsModel('Checked shirt', '', 22.50, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178389/kenyan%20lifestyle/images/kl-ig-05.png'),
    new ProductsModel('Black sling bag printed Kenyan Lifestyle', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178457/kenyan%20lifestyle/images/kl-ig-03.png'),
    new ProductsModel('ink sling bag printed Kenyan Lifestyle in black', '', 15,'https://res.cloudinary.com/jaredomamo/image/upload/v1536178405/kenyan%20lifestyle/images/kl-ig-07.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
