import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { MaterialsModule } from '../materials/materials.module';
import { MatCardModule } from '@angular/material/card';
import { ProductManagementRoutingModule } from './product-management-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    OrderConfirmationComponent
  ],
  imports: [
    CommonModule,
    ProductManagementRoutingModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule
  ]
})
export class ProductManagementModule { }
