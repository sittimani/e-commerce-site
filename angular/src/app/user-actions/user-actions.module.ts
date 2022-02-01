import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAddressComponent } from './components/view-address/view-address.component';
import { UserActionsRoutingModule } from './user-actions-routing.module.';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ViewAddressComponent
  ],
  imports: [
    CommonModule,
    UserActionsRoutingModule,
    SharedModule
  ]
})
export class UserActionsModule { }
