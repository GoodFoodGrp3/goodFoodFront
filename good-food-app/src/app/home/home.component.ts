import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../services/auth-guard-service';
import { LoginService } from '../services/login-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
