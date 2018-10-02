import { Component, OnInit } from '@angular/core';

import { ProductsModel } from '../../shared/products.model';
import { ProductsService } from '../../shared/products.service';

@Component({
  selector: 'app-accessories',
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
export class AccessoriesComponent implements OnInit {
  products: ProductsModel[];

  constructor(
    private prodServices: ProductsService
  ) { }

  ngOnInit() {
    this.products = this.prodServices.getMaleProducts().filter(
      acc => acc.category.includes('accessories')
    );
  }

}

