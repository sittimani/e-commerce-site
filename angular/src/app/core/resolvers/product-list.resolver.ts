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
export class ProductListResolver implements Resolve<Product[]> {

  constructor(private productService: ProductService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> {
    const category: string = route.paramMap.get('name') || ""
    return this.productService.getProducts(category)
  }
}
