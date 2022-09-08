import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../models/user";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable()
export class LoginService {
    constructor (
        private router: Router,
        private httpClient: HttpClient
    ) {}

    CheckUser(data: any)
    {
      const body=JSON.stringify(data);
      const headers = { 'content-type': 'application/json'}
      return this.httpClient.post<any>(environment.apiUrl + '/authenticate', body,{'headers':headers} );
  
    }
}