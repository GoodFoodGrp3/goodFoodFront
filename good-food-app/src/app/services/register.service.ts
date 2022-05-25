import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  createCustomer(customer: Customer)
  {
    const body=JSON.stringify(customer);
    const headers = { 'content-type': 'application/json'}
    return this.httpClient.post<any>(environment.apiUrl + '/customers/register', body,{'headers':headers} );

  }
}
