import { Component, OnInit } from '@angular/core';

import { ProductsModel } from '../../shared/model';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
  products: ProductsModel[] = [
    new ProductsModel('Pink sling bag printed Kenyan Lifestyle in black', '', 15,'https://res.cloudinary.com/jaredomamo/image/upload/v1536178405/kenyan%20lifestyle/images/kl-ig-07.png'),
    new ProductsModel('Brown leather African-print backpack', '', 18, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786618/kenyan%20lifestyle/11-09-photos/kl-ig-17.png')
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
