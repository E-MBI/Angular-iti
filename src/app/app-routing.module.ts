import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrivenFormComponent } from './components/driven-form/driven-form.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: '', component: DrivenFormComponent },
  { path: 'products', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
