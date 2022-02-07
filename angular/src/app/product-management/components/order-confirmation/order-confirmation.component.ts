import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { selectvalidator } from 'src/app/core/validators/select.validators';
import { color } from 'src/environments/environment.prod';
import { Product } from '../../shared/interface/product.interface';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  color = color
  orderForm!: FormGroup
  product!: Product
  title = "Confirm Order"

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private route: ActivatedRoute) {
    this.orderForm = this.formBuilder.group({
      address: ['no', [selectvalidator]],
      deliveryType: ['no', [selectvalidator]]
    })
    this.product = this.route.snapshot.data.product
  }

  ngOnInit(): void {
  }

  placeOrder() {
    console.log(this.orderForm.value)
  }
}
