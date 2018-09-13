import { Component, OnInit } from '@angular/core';

import { GalleryModel } from './gallery.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  items: GalleryModel[] = [
    new GalleryModel ('', 'https://res.cloudinary.com/jaredomamo/image/upload/v1536705565/kenyan%20lifestyle/11-09-photos/kl-03.jpg'),
    new GalleryModel ('Multi-colored African print jacket exhibited at the Fashio Couture Fashion event', 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786616/kenyan%20lifestyle/11-09-photos/kl-ig-35.png'),
    new GalleryModel ('', 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786595/kenyan%20lifestyle/11-09-photos/kl-ig-20.png'),
    new GalleryModel ('', 'https://res.cloudinary.com/jaredomamo/image/upload/v1536705562/kenyan%20lifestyle/11-09-photos/kl-11.jpg'),
    new GalleryModel ('', 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786578/kenyan%20lifestyle/11-09-photos/kl-ig-22.png'),
    new GalleryModel ('', 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786569/kenyan%20lifestyle/11-09-photos/kl-ig-24.png'),
    new GalleryModel ('', 'https://res.cloudinary.com/jaredomamo/image/upload/v1536786560/kenyan%20lifestyle/11-09-photos/kl-ig-25.png'),
    // new GalleryModel ('', ''),
    // new GalleryModel ('', ''),
    // new GalleryModel ('', ''),
    // new GalleryModel ('', ''),
    // new GalleryModel ('', ''),
  ]

  constructor() { }

  ngOnInit() {
  }

}
