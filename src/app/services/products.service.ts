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

  getProductById(proId: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${proId}`);
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

  onUpdatePro(prodID: any): Observable<any> {
    const proUrl = 'http://localhost:8080/products';
    return this.http.put<any>(`${proUrl}/${prodID}`, this.option).pipe(
      retry(3),
      catchError((err) => {
        return throwError(() => new Error(err));
      })
    );
  }

  onDeleteProduct(prodID: any): Observable<any> {
    const delUrl = 'http://localhost:8080/products';
    return this.http.delete<any>(`${delUrl}/${prodID}`, this.option).pipe(
      retry(2),
      catchError((err) => {
        return throwError(() => new Error(err));
      })
    );
  }
}
