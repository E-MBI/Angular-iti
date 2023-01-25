import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/interface/iproduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  // properties
  prodArr: Iproduct[] = [];

  constructor(private prodSer: ProductsService) {}

  ngOnInit(): void {
    this.prodSer.getAllProducts().subscribe({
      next: (value) => (this.prodArr = value),
      error: (err) => console.log(err),
    });
  }

  showProData(id: any) {}

  onDeletPro(id: any) {
    this.prodSer.onDeleteProduct(id).subscribe({
      next: () => (this.prodArr = this.prodArr.filter((Pro) => Pro.id != id)),
    });
  }
}
