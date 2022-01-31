import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/product-management/shared/interface/product.interface';
import { ProductService } from 'src/app/product-management/shared/services/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailResolver implements Resolve<Product> {

  constructor(private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    const id = route.paramMap.get('id') || ''
    return this.productService.getProductDetails(id)
  }
}
