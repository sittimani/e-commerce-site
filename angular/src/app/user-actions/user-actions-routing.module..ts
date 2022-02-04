import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { AddressResolver } from '../core/resolvers/address.resolver';
import { ViewAddressComponent } from './components/view-address/view-address.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/user/my-address",
    pathMatch: "full"
  },
  {
    path: "my-address",
    component: ViewAddressComponent,
    canActivate: [AuthGuard],
    resolve: {
      address: AddressResolver
    },
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserActionsRoutingModule { }