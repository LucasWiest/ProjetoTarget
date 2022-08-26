import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 


//Routes 
import { ProductsListComponent } from './components/productsList/productsList.component';

const routes: Routes = [
  { 
    path: '', 
    component: ProductsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
