import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Iproduct } from '../interface/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  option: { headers: HttpHeaders };

  private apiUrl = 'http://localhost:8080/products';

  constructor(private http: HttpClient) {
    this.option = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
    };
  }

  getAllProducts(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(this.apiUrl);
  }

  addNewProduct(newProd: Iproduct): Observable<Iproduct> {
    return this.http
      .post<Iproduct>(this.apiUrl, JSON.stringify(newProd), this.option)
      .pipe(
        retry(2),
        catchError((err) => {
          console.log(err);
          return throwError(() => new Error('error occurred', err));
        })
      );
  }
}
