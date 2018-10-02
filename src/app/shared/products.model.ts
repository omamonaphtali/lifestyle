export class ProductsModel {
  public title:string;
  public description: string;
  public price: number;
  public imageMap: string;
  public category: string;
  public gender: string;

  constructor(title: string, desc: string, price: number, imageMap: string, cat: string, gender: string) {
    this.title = title;
    this.description = desc;
    this.price = price;
    this.imageMap = imageMap;
    this.category = cat;
    this.gender = gender;
  }
}