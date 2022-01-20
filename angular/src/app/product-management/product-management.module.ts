import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { MaterialsModule } from '../materials/materials.module';
import { MatCardModule } from '@angular/material/card';
import { ProductManagementRoutingModule } from './product-management-routing.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ProductManagementRoutingModule,
    MaterialsModule,
    MatCardModule
  ]
})
export class ProductManagementModule { }
