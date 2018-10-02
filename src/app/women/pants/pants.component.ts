import { Component, OnInit } from '@angular/core';

import { ProductsModel } from '../../shared/products.model';
import { ProductsService } from '../../shared/products.service';

@Component({
  selector: 'app-pants',
  template: `
  <div class="row">
  <div class="col-md-4" *ngFor="let item of products">
    <div class="card">
      <img class="card-img-top" [src]="item.imageMap">
      <div class="card-body">
        <p class="card-text">{{ item.title }}</p>
        <p>$ {{ item.price }}</p>
      </div>
    </div>
  </div>
</div>`
})
export class PantsComponent implements OnInit {
  products: ProductsModel[];

  constructor(private prodService: ProductsService) { }

  ngOnInit() {
    this.products = this.prodService.getFemaleProducts().filter(
      pants => pants.category.includes('pants')
    );
  }

}
