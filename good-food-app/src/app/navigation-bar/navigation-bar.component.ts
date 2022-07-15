import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  urlLogin = 'login-component'
  urlProfile = 'profile-component'

  constructor(private route: ActivatedRoute, private router: Router, private cartService: CartService) { }

  public totalItem: number = 0;
  navbarCollapsed = true;
  detectUser = sessionStorage.getItem('token')
  dataset = ['Hamburger', 'GoodFood', 'bacon'];

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(
      res => {
        this.totalItem = res.length;

      }
    )

   }

  goToProfile() {
    console.log("Passe dans la méthode")
      console.log("passe dans le login")
      this.router.navigateByUrl('/login')
  }

  deconnect() {
    sessionStorage.clear();
    location.reload();
  }

  toggleNavbarCollapse() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
}
