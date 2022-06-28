import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Components/Admin/add-product/add-product.component';
import { HomeComponent } from './Components/home/home.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { OrderMasterComponent } from './Components/order-master/order-master.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';
import { RegisterUserComponent } from './Components/register-user/register-user.component';

// const routes: Routes = [
//   // First match wins
//   // {path:'',component:}
 
//   {path:'',redirectTo:'/Home',pathMatch:'full'},// Default path
//   {path:'Home',component:HomeComponent},
//   {path:'Products',component:ProductsComponent},
//   {path:'Order',component:OrderMasterComponent},
//  {path:'**',component:NotFoundPageComponent}, // wildcard path
// ];

const routes: Routes = [
 {path:'',component:MainLayoutComponent,children:[
  // {path:'Main',component:MainLayoutComponent,children:[
  
  {path:'',redirectTo:'/Home',pathMatch:'full'},// Default path
  {path:'Home',component:HomeComponent},
  {path:'Products',component:ProductsComponent},
  {path:'Products/:pid',component:ProductDetailsComponent},
  {path:'Order',component:OrderMasterComponent},
  {path:'NewProduct',component:AddProductComponent},
  {path:'EditProduct/:pid',component:AddProductComponent},
 ]},
 {path:'register',component:RegisterUserComponent},
 {path:'**',component:NotFoundPageComponent}, // wildcard path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
