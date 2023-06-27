import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterProductComponent } from './register-product/register-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LandingComponent } from './landing/landing.component';
import { LayoutComponent } from './account/layout.component';
import { RegisterComponent } from './account/register.component';
import { LoginComponent } from './account/login.component';

const routes: Routes = [
  { path: 'register', component: RegisterProductComponent },
  { path: 'home', component: LandingComponent },
  {
    path: 'detail/:id', 
    component: ProductDetailsComponent
  },
  { path : '', component: RegisterComponent },
  { path: 'log', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
