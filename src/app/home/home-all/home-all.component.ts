import { Component, OnInit } from '@angular/core';

import { ProductsModel } from '../../shared/products.model';
import { ProductsService } from '../../shared/products.service';

@Component({
  selector: 'app-home-all',
  templateUrl: './home-all.component.html',
  styleUrls: ['./home-all.component.css']
})
export class HomeAllComponent implements OnInit {
  products: ProductsModel[];

  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
