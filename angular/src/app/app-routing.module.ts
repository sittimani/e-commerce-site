import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './product-management/components/home/home.component';
import { InternalServerErrorComponent } from './shared/components/internal-server-error/internal-server-error.component';
import { LoginComponent } from './user-management/components/login/login.component';
import { RegisterComponent } from './user-management/components/register/register.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "products",
    loadChildren: () => import('./product-management/product-management.module').then(m => m.ProductManagementModule)
  },
  {
    path: "**",
    component: InternalServerErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }