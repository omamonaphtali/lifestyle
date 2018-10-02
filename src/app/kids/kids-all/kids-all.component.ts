import { Component, OnInit } from '@angular/core';

import { ProductsModel } from '../../shared/products.model';
import { ProductsService } from '../../shared/products.service';

@Component({
  selector: 'app-kids-all',
  templateUrl: './kids-all.component.html',
})
export class KidsAllComponent implements OnInit {
  products: ProductsModel[];

  constructor(private prodService: ProductsService) { }

  ngOnInit() {
    this.products = this.prodService.getKidsProducts();
  }

}
