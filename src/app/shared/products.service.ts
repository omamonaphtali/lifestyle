import { ProductsModel } from "./products.model";

export class ProductsService {
  products: ProductsModel[] = [
    new ProductsModel('Floral baseball shirt with matching pants', '', 25,'https://res.cloudinary.com/jaredomamo/image/upload/v1536178433/kenyan%20lifestyle/images/kl-ig-13.png', 'full', 'male, home'),
    new ProductsModel('Red-Blue "Kenyan Lifestyle" African print top', '', 12, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536705562/kenyan%20lifestyle/11-09-photos/kl-04.jpg', 'topshome', 'women, home'),
    new ProductsModel('Brown striped shorts with matching top', '', 23, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178422/kenyan%20lifestyle/images/kl-ig-09.png', 'full', 'male, home'),
    new ProductsModel('Palm print jacket with matching pant', '', 28, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786534/kenyan%20lifestyle/11-09-photos/kl-ig-34.png', 'full', 'women, home'),
    new ProductsModel('Striped blue jacket with matching pants', '', 25, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178437/kenyan%20lifestyle/images/kl-ig-12.png', 'full', 'male, home'),
    new ProductsModel('Pink sling bag printed Kenyan Lifestyle in black', '', 15,'https://res.cloudinary.com/jaredomamo/image/upload/v1536178405/kenyan%20lifestyle/images/kl-ig-07.png', 'accessories', 'women, home'),
    new ProductsModel('Black Kenyan Lifestyle sling bag', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178457/kenyan%20lifestyle/images/kl-ig-03.png', 'accessories', 'male, home'),
    new ProductsModel('Red pants with white stripe on the side printed Kenyan Lifesyle', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178429/kenyan%20lifestyle/images/kl-ig-15.png', 'pants', 'women, home'),
    new ProductsModel('Kenyan Lifestyle camoflouge baseball cap', '', 8, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786615/kenyan%20lifestyle/11-09-photos/kl-ig-41.png', 'accessories', 'male, women, home'),
    new ProductsModel('Black "Kenyan Lifestyle" vest', '', 12, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786570/kenyan%20lifestyle/11-09-photos/kl-ig-42.png', 'tops', 'women, home'),
    new ProductsModel('Black Kenyan Lifestyle t-shirt', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786626/kenyan%20lifestyle/11-09-photos/kl-ig-40.png', 'tops', 'male, home'),

    new ProductsModel('African print khaki jacket', '', 18, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178445/kenyan%20lifestyle/images/kl-ig-14.png', 'tops, all', 'male, home'),
    new ProductsModel('Eptm with a red stripe on the sides', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1534924458/kenyan%20lifestyle/IMG_8960.jpg', 'pants, all', 'women, home'),
    new ProductsModel('Brown leather bag with a patch of African print', '', 18, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786618/kenyan%20lifestyle/11-09-photos/kl-ig-17.png', 'accessories, all', 'male, home'),
    new ProductsModel('Floral baseball shirt with matching pants', '', 25,'https://res.cloudinary.com/jaredomamo/image/upload/v1536178433/kenyan%20lifestyle/images/kl-ig-13.png', 'full, all', 'male'),
    new ProductsModel('Brown striped shorts with matching top', '', 23, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178422/kenyan%20lifestyle/images/kl-ig-09.png', 'full, all', 'male'),
    new ProductsModel('Striped blue jacket with matching pants', '', 25, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178437/kenyan%20lifestyle/images/kl-ig-12.png', 'full, all', 'male'),
    new ProductsModel('Brown leather bag with a patch of African print', '', 18, 'https://res.cloudinary.com/jaredomamo/image/upload/v1534851528/kenyan%20lifestyle/IMG_8841.jpg', 'accessories', 'male'),
    new ProductsModel('Kenyan Lifestyle mavin', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786553/kenyan%20lifestyle/11-09-photos/kl-ig-28.png', 'accessories', 'male'),
    new ProductsModel('Floral pants with white stripe on the side', '', 15,'https://res.cloudinary.com/jaredomamo/image/upload/v1536833108/kenyan%20lifestyle/images/kl-ig-13-pant.png', 'pants', 'male'),
    new ProductsModel('Striped brown shorts', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178422/kenyan%20lifestyle/images/kl-ig-09.png', 'pants', 'male'),
    new ProductsModel('Blue pants with white vertical stripes', '', 12, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536832228/kenyan%20lifestyle/11-09-photos/kl-ig-12-pant.png', 'pants', 'male'),
    new ProductsModel('Floral print baseball shirt', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178430/kenyan%20lifestyle/images/kl-ig-11.png', 'tops', 'male'),
    new ProductsModel('Custom-printed t-shirt', '', 8, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786626/kenyan%20lifestyle/11-09-photos/kl-ig-40.png', 'tops', 'male'),
    new ProductsModel('Jet print baseball shirt', '', 12, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786547/kenyan%20lifestyle/11-09-photos/kl-ig-32.png', 'tops', 'male'),
    new ProductsModel('Striped blue jacket', '', 18, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536832228/kenyan%20lifestyle/11-09-photos/kl-ig-12-top.png', 'tops', 'male'),
    new ProductsModel('Checked African print shirt', '', 22.50, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536178389/kenyan%20lifestyle/images/kl-ig-05.png', 'tops', 'male'),
    new ProductsModel('Kenyan Lifestyle t-shirt', '', 8, 'https://res.cloudinary.com/jaredomamo/image/upload/v1534851026/kenyan%20lifestyle/IMG_8827.jpg', 'tops', 'male'),
    new ProductsModel('Customzied jacket', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536832709/kenyan%20lifestyle/images/kl-ig-16-top.png', 'tops', 'male'),
    new ProductsModel('Palm print pant', '', 12, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786529/kenyan%20lifestyle/11-09-photos/kl-ig-34-pant.png', 'pants', 'women'),
    new ProductsModel('Palm print jacket', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786597/kenyan%20lifestyle/11-09-photos/kl-ig-34-top.png', 'tops', 'women'),
    new ProductsModel('White "Kenyan Lifestyle" t-shirt', '', 8, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786564/kenyan%20lifestyle/11-09-photos/kl-ig-23.png', 'tops', 'women'),
    new ProductsModel('Purple dashiki dress-top', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786535/kenyan%20lifestyle/11-09-photos/kl-ig-45.png', 'tops', 'women'),
    new ProductsModel('Black African Print waterfall', '', 18, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786534/kenyan%20lifestyle/11-09-photos/kl-ig-33.png', 'tops', 'women'),
    new ProductsModel('Red dashiki jacket(unisex)', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786612/kenyan%20lifestyle/11-09-photos/kl-ig-37.png', 'tops', 'kids'),
    new ProductsModel('Custom-printed hoodie', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786581/kenyan%20lifestyle/11-09-photos/kl-ig-21.png', 'tops', 'kids'),
    new ProductsModel('"Big Deal" custom-printed hoodie', '', 15, 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786580/kenyan%20lifestyle/11-09-photos/kl-ig-44.png', 'tops', 'kids'),
  ];

  getProducts() {
    return this.products.slice().filter(
      prod => prod.gender.includes('home')
    );
  }
  getMaleProducts() {
    return this.products.filter(
      maleProd => maleProd.gender.includes('male')
    );
  }
  getFemaleProducts() {
    return this.products.filter(
      womenProd => womenProd.gender.includes('women')
    );
  }
  getKidsProducts() {
    return this.products.filter(
      kidProd => kidProd.gender.includes('kids')
    );
  }
}