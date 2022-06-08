import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customer!: Customer[];

  constructor(private httpClient: HttpClient, private router: Router) { }

  CheckUserToken(token: any): Observable<Customer> {
    const headers = { 'Authorization': 'Bearer ' + token}
    return this.httpClient.get<Customer>(environment.apiUrl + '/customers/current',{'headers':headers});
  }

  /**
   *
   * Recuperation utilisateur par son id
   */
   getOneUser(id : number) : Observable<Customer> {
    const headers = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token')}
    return this.httpClient.get<Customer>(environment.apiUrl + '/customers/' + id,{'headers':headers});
  }
  
}
