import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products!:Products[];

  constructor(private httpClient: HttpClient) {}

    getProducts(): Observable<Products[]>
    {
      const headers = { 'content-type': 'application/json'}
      return this.httpClient.get<Products[]>(environment.apiUrl + '/products',{'headers':headers});
  
    }
}
