import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { selectvalidator } from 'src/app/core/validators/select.validators';
import { Address } from 'src/app/user-actions/shared/interface/address.interface';
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
  addresses!: Address[]

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private route: ActivatedRoute) {
    this.orderForm = this.formBuilder.group({
      address: ['no', [selectvalidator]],
      deliveryType: ['no', [selectvalidator]]
    })
    this.product = this.route.snapshot.data.product
  }

  ngOnInit(): void {
    this.productService.getAddress().subscribe(address => {
      this.addresses = address
    })
  }

  placeOrder() {
    const data = this.orderForm.value
    const values = {
      productId: this.product._id,
      deliveryType: data.deliveryType,
      address: data.address
    }
    this.productService.placeOrder(values).subscribe(result => {
      console.log(result)
    })
  }
}
