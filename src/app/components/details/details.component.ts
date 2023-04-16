import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, retry } from 'rxjs';
import { Iproduct } from 'src/app/interface/iproduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  // *____Variables_______
  proDetails: any;
  product_id: any;
  // *____Variables_______
  constructor(
    private _porSer: ProductsService,
    private _router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.product_id = this._router.snapshot.paramMap.get('pro_id');

    this._porSer.getAllProducts().subscribe({
      next: (res) => {
        this.proDetails = res.filter((pro: Iproduct) => {
          return pro.id == Number(this.product_id);
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
