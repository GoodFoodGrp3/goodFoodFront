import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  urlLogin = 'login-component'
  urlProfile = 'profile-component'

  constructor(private route: ActivatedRoute, private router: Router) { }

  navbarCollapsed = true;
  detectUser = sessionStorage.getItem('token')
  dataset = ['Hamburger', 'GoodFood', 'bacon'];

  ngOnInit(): void {

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
