import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serverAddress } from 'src/environments/environment.prod';
import { Category, Product } from '../interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<Category[]>(`${serverAddress}get-categories`)
  }

  getBaners() {
    return this.http.get<String[]>(`${serverAddress}get-baners`)
  }

  getProducts(category:string) {
    return this.http.get<Product[]>(`${serverAddress}get-products/${category}`)
  }

  getProductDetails(id:string) {
    return this.http.get<Product>(`${serverAddress}get-product/${id}`)
  }
}
