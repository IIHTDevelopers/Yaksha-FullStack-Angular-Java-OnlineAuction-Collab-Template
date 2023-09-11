import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationComponent } from './components/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './components/update/update.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductByIdComponent } from './components/product-by-id/product-by-id.component';
import { ProductByCategoryComponent } from './components/product-by-category/product-by-category.component';


const routes:Routes = [
  
  {path: "registration", component: RegistrationComponent},
  {path: "update/:id", component: UpdateComponent},
  {path: "customers-list", component: CustomersListComponent},
  {path: "products-list", component: ProductListComponent},
  {path: "products/:id", component: ProductByIdComponent}
  
]


@NgModule({
  declarations: [
   
    RegistrationComponent,
    UpdateComponent,
    ProductListComponent,
    CustomersListComponent,
    ProductByIdComponent,
    ProductByCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // HttpClientModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
