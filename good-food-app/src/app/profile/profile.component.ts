import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userConnected!: Customer;

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    console.log("LA TOKKKKENN" + sessionStorage.getItem('token'))
    this.checkUsers(sessionStorage.getItem('token'));
  }

  logout() {
    sessionStorage.clear()
    this.router.navigateByUrl('/home')
  }

  checkUsers(token : any){
    this.customerService.CheckUserToken(token).subscribe(
      reponse => {
        this.userConnected = reponse;
        console.log(this.userConnected)
        //this.getUser(reponse.id);
      });
  }

  /**
   Recuperation utilisateur connecté
   */
   getUser(id : number){
    this.customerService.getOneUser(id).subscribe(
      reponse => {
        this.userConnected = reponse;
        console.log(this.userConnected)
      });
  }
}
