import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { Iproduct } from 'src/app/interface/iproduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.scss'],
})
export class DrivenFormComponent {
  constructor(private router: Router, private proServ: ProductsService) {}
  newProd: Iproduct = {
    name: '',
    price: 0,
    category: '',
    quantity: 0,
  };

  //func's
  onAddProduct() {
    const newProduct = this.newProd;
    this.proServ.addNewProduct(newProduct).subscribe((prd) => {
      console.log(prd);
    });
    this.router.navigateByUrl('/products');
  }
}
