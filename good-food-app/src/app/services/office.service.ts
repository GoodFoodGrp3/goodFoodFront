import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Office } from '../models/offices';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  constructor(
    private httpClient : HttpClient
  ) { }

  getOffices(): Observable<Office[]>
    {
      const headers = { 'content-type': 'application/json'}
      return this.httpClient.get<Office[]>(environment.apiUrl + '/offices',{'headers':headers});
    }
}
