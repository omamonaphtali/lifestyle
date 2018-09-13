export class GalleryModel {
  description: string;
  imagePath: string;

  constructor(desc: string, imagePath: string) {
    this.description = desc;
    this.imagePath = imagePath;
  }
}