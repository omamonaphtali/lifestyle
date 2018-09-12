import { Component, OnInit } from '@angular/core';

import { ProductsModel } from '../../shared/model';

@Component({
  selector: 'app-tops',
  templateUrl: './tops.component.html',
  styleUrls: ['./tops.component.css']
})
export class TopsComponent implements OnInit {
  products: ProductsModel[] = [
    new ProductsModel('Bold Print Shirt', '', 20, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178405/kenyan%20lifestyle/images/kl-ig-08.png'),
    new ProductsModel('Retro-Print Shirt', '', 23.50, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178406/kenyan%20lifestyle/images/kl-ig-02.png'),
    new ProductsModel('Striped blue jacket', '', 18, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178437/kenyan%20lifestyle/images/kl-ig-12.png'),
    new ProductsModel('Checked shirt', '', 22.50, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178389/kenyan%20lifestyle/images/kl-ig-05.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
