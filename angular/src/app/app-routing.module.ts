import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternalServerErrorComponent } from './shared/components/internal-server-error/internal-server-error.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
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
    loadChildren: () => import('./product-management/product-management.module').then(module => module.ProductManagementModule)
  },
  {
    path: "user",
    loadChildren: () => import('./user-actions/user-actions.module').then(module => module.UserActionsModule)
  },
  {
    path: "not-found",
    component: NotFoundComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }