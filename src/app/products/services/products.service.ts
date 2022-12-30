import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private API = 'products';
  constructor(private httpService: HttpService) {}
  getProducts(limit?: number) {
    const params = {
      limit,
    };
    return this.httpService.sendGetRequest(this.API, params);
  }
  getProductDetails(productId: string) {
    const api = `${this.API}/${productId}`;
    return this.httpService.sendGetRequest(api);
  }
  postProduct(product: any) {
    return this.httpService.sendPostRequest(this.API, product);
  }
}
