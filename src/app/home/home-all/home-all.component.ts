import { Component, OnInit } from '@angular/core';

import { ProductsModel } from '../../shared/model';

@Component({
  selector: 'app-home-all',
  templateUrl: './home-all.component.html',
  styleUrls: ['./home-all.component.css']
})
export class HomeAllComponent implements OnInit {
  products: ProductsModel[] = [
    new ProductsModel('Floral baseball shirt with matching pants', '', 25,'https://res.cloudinary.com/jaredomamo/image/upload/v1536178433/kenyan%20lifestyle/images/kl-ig-13.png'),
    new ProductsModel('Red-Blue "Kenyan Lifestyle" African print top', '', 12, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536705562/kenyan%20lifestyle/11-09-photos/kl-04.jpg'),
    new ProductsModel('Brown striped shorts with matching top', '', 23, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178422/kenyan%20lifestyle/images/kl-ig-09.png'),
    new ProductsModel('Palm print jacket with matching pant', '', 28, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786534/kenyan%20lifestyle/11-09-photos/kl-ig-34.png'),
    new ProductsModel('Striped blue jacket with matching pants', '', 25, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178437/kenyan%20lifestyle/images/kl-ig-12.png'),
    new ProductsModel('Pink sling bag printed Kenyan Lifestyle in black', '', 15,'https://res.cloudinary.com/jaredomamo/image/upload/v1536178405/kenyan%20lifestyle/images/kl-ig-07.png'),
    new ProductsModel('Black Kenyan Lifestyle sling bag', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178457/kenyan%20lifestyle/images/kl-ig-03.png'),
    new ProductsModel('Red pants with white stripe on the side printed Kenyan Lifesyle', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178429/kenyan%20lifestyle/images/kl-ig-15.png'),
    new ProductsModel('Kenyan Lifestyle camoflouge baseball cap', '', 8, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786615/kenyan%20lifestyle/11-09-photos/kl-ig-41.png'),
    new ProductsModel('Black "Kenyan Lifestyle" vest', '', 12, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786570/kenyan%20lifestyle/11-09-photos/kl-ig-42.png'),
    new ProductsModel('Black Kenyan Lifestyle t-shirt', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786626/kenyan%20lifestyle/11-09-photos/kl-ig-40.png'),

    new ProductsModel('African print khaki jacket', '', 18, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178445/kenyan%20lifestyle/images/kl-ig-14.png'),
    new ProductsModel('Eptm with a red stripe on the sides', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1534924458/kenyan%20lifestyle/IMG_8960.jpg'),
    new ProductsModel('Brown leather bag with a patch of African print', '', 18, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786618/kenyan%20lifestyle/11-09-photos/kl-ig-17.png'),
    // new ProductsModel ('', '', 15, ''),
    // new ProductsModel ('', '', 15, ''),
    // new ProductsModel ('', '', 15, ''),
    // new ProductsModel ('', '', 15, ''),
    // new ProductsModel ('', '', 15, ''),
    // new ProductsModel ('', '', 15, ''),
  ];

  constructor() { }

  ngOnInit() {
  }

}
