import { Injectable } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

@Injectable()
export class NewsServiceService {

  constructor(private httpClient: HttpClientModule) { }
  getShippingPrices() {
    return this.httpClient.get('/assets/shipping.json');
  }
}