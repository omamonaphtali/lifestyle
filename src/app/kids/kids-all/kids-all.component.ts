import { Component, OnInit } from '@angular/core';

import { ProductsModel } from '../../shared/model';

@Component({
  selector: 'app-kids-all',
  templateUrl: './kids-all.component.html',
  styleUrls: ['./kids-all.component.css']
})
export class KidsAllComponent implements OnInit {
  products: ProductsModel[] = [
    new ProductsModel('Red dashiki jacket(unisex)', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786612/kenyan%20lifestyle/11-09-photos/kl-ig-37.png'),
    new ProductsModel('Custom-printed hoodie', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786581/kenyan%20lifestyle/11-09-photos/kl-ig-21.png'),
    new ProductsModel('"Big Deal" custom-printed hoodie', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786580/kenyan%20lifestyle/11-09-photos/kl-ig-44.png'),
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
