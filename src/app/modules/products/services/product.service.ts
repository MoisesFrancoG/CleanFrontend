import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Product } from '../../../core/models/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private urlProduct = 'http://localhost:8080/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<{products : Product[]}>(this.urlProduct).pipe(
      map(response => response.products)
    );
  }

  getProduct(id: number): Observable<Product> { 
    return this.http.get<Product>(`${this.urlProduct}/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.urlProduct, product);
  }

  updateProduct(id: number,product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.urlProduct}/${id}`, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlProduct}/${id}`);
  }
}
