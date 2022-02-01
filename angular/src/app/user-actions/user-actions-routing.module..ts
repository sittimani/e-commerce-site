import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressResolver } from '../core/resolvers/address.resolver';
import { ViewAddressComponent } from './components/view-address/view-address.component';

const routes: Routes = [
  {
    path: "my-address",
    component: ViewAddressComponent,
    resolve: {
      address: AddressResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserActionsRoutingModule { }