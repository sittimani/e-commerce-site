import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../shared/interface/product.interface';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  product!: Product

  constructor(private route: ActivatedRoute) {
    this.product = this.route.snapshot.data.product
  }

  buyNow() { }
}
