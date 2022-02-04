import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/user-management/services/auth.service';
import { Category } from '../../shared/interface/product.interface';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  categories: Category[] = []
  interval = 6000
  hasCategories = false
  slides: String[] = []

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) {

    this.productService.getCategories().subscribe(categories => {
      this.categories = categories
      if (this.categories.length !== 0)
        this.hasCategories = true
    })

    this.productService.getBaners().subscribe(baners => {
      this.slides = baners
    })
  }

  explorecategories(name: string) {
    this.router.navigate([`../list/${name}`], { relativeTo: this.route })
  }

}
