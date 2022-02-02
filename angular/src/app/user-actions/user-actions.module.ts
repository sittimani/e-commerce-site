import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAddressComponent } from './components/view-address/view-address.component';
import { UserActionsRoutingModule } from './user-actions-routing.module.';
import { SharedModule } from '../shared/shared.module';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { MaterialsModule } from '../materials/materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ViewAddressComponent,
    AddressFormComponent
  ],
  imports: [
    CommonModule,
    UserActionsRoutingModule,
    SharedModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AddressFormComponent
  ]
})
export class UserActionsModule { }
