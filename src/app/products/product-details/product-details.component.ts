import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {}
  ngOnInit(): void {
    this.extractIdFromURL();
  }
  extractIdFromURL() {
    this.activatedRoute.params.subscribe((paramsObserver: any) => {
      if (paramsObserver && paramsObserver.hasOwnProperty('id')) {
        this.getProductDetails(paramsObserver.id);
      }
    });
  }
  getProductDetails(productId: string) {
    this.productsService
      .getProductDetails(productId)
      .subscribe((productDetails) => {
        this.product = { ...productDetails };
      });
  }
}
