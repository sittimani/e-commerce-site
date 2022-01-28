import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../shared/interface/product.interface';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product ={
    _id: '',
    name: '',
    url: '',
    price: 0,
    available_stocks: 0,
    category: '',
    description: ''
  }

  constructor(private productService: ProductService, private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get("id") || ""
    this.productService.getProductDetails(id).subscribe(product => {
      this.product = product
    })
  }

  ngOnInit(): void {

  }

  buyNow() { }

}
