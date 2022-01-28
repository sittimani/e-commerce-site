import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Product } from '../../shared/interface/product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  category: string = ""
  products!: Product[]

  constructor(private route: ActivatedRoute, private router: Router) {
    this.category = this.route.snapshot.paramMap.get('name') || ""
  }

  ngOnInit(): void {
    this.products = this.route.snapshot.data.products
  }

  exploreproduct(id: string) { 
    this.router.navigate([`./${id}`], {relativeTo: this.route})
  }

  addToCart(id: string) { }

  addWishList(id: string) { }

}
