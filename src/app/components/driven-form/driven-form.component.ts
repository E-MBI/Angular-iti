import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/interface/iproduct';

@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.scss'],
})
export class DrivenFormComponent {
  constructor(private router: Router) {}
  newProd: Iproduct = {} as Iproduct;

  //func's
  onAddProduct() {
    //here call the method on product services to post the new product
    console.log(this.newProd);

    // this.router.navigateByUrl('/products');
  }
}
