import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Product } from '../../shared/interface/product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  category: string = ""
  products!: Product[]

  constructor(private route: ActivatedRouteSnapshot) {
    this.category = this.route.paramMap.get('name') || ""
  }

  ngOnInit(): void {
    this.products = this.route.data.products
  }

  exploreproduct(id: string) { }

  addToCart(id: string) { }

  addWishList(id: string) { }

}
