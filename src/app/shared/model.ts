export class ProductsModel {
  public title:string;
  public description: string;
  public price: number;
  public imageMap: string;

  constructor(title: string, desc: string, price: number, imageMap: string) {
    this.title = title;
    this.description = desc;
    this.price = price;
    this.imageMap = imageMap;
  }
}