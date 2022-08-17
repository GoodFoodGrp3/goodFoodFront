import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categories } from '../models/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  products!:Categories[];

  constructor(private httpClient: HttpClient) {}

    getCategories(): Observable<Categories[]>
    {
      const headers = { 'content-type': 'application/json'}
      return this.httpClient.get<Categories[]>(environment.apiUrl + '/categories',{'headers':headers});
  
    }
}
