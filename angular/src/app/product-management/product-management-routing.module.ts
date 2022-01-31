import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { ProductDetailResolver } from '../core/resolvers/product-detail.resolver';
import { ProductListResolver } from '../core/resolvers/product-list.resolver';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/products/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "list/:name",
    component: ProductListComponent,
    canActivate: [AuthGuard],
    resolve: {
      products: ProductListResolver
    }
  },
  {
    path: "list/:name/:id",
    component: ProductDetailComponent,
    canActivate: [AuthGuard],
    resolve: {
      product: ProductDetailResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManagementRoutingModule { }