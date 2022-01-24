import { Component, OnInit } from '@angular/core';
import { Category } from '../../shared/interface/product.interface';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  catagories: Category[] = []

  isNoCatagory = false
  interval = 6000
  slides: String[] = []

  constructor(private productService: ProductService) {
    this.productService.getCategories().subscribe(categories => {
      this.catagories = categories
    })
    
    this.productService.getBaners().subscribe(baners => {
      this.slides = baners
    })
  }

  exploreCatagories(name: string) { }

}
