import { NgModule } from '@angular/core';
import { BrowserModule, enableDebugTools } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DrivenFormComponent } from './components/driven-form/driven-form.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';

const appRoutes: Routes = [
  { path: '', component: DrivenFormComponent },
  { path: 'products', component: ProductsComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    DrivenFormComponent,
    HeaderComponent,
    ProductsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
