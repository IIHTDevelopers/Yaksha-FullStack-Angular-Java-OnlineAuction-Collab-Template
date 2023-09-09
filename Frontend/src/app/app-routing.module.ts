import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "customer", loadChildren: ()=>import("./modules/customer/customer.module").then(M=>M.CustomerModule)},
  {path: "seller", loadChildren: ()=>import("./modules/seller/seller.module").then(M=>M.SellerModule)},
  {path: "**", redirectTo: "home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
