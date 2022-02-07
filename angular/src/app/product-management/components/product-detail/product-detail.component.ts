import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../shared/interface/product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  product!: Product

  constructor(private route: ActivatedRoute, private router: Router) {
    this.product = this.route.snapshot.data.product
  }

  buyNow() {
    this.router.navigate(['products/confirm/' + this.product._id])
  }
}
