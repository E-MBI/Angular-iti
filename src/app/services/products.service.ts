import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iproduct } from '../interface/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'http://localhost:8080/products';
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(this.apiUrl);
  }
}
