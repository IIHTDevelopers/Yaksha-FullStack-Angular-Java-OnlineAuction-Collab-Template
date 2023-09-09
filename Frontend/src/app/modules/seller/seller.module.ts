import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './components/registration/registration.component';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NewProductComponent } from './components/new-product/new-product.component';
import { SellerByIdComponent } from './components/seller-by-id/seller-by-id.component';
import { SellersListComponent } from './components/sellers-list/sellers-list.component';

const routes:Routes = [
  
  {path: "registration", component: RegistrationComponent},
  {path: "create-product", component: NewProductComponent},
  {path: "seller-by-id/:id", component: SellerByIdComponent},
  {path: "sellers-list", component: SellersListComponent}
  
]


@NgModule({
  declarations: [
    RegistrationComponent,
    
    NewProductComponent,
    SellerByIdComponent,
    SellersListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class SellerModule { }
