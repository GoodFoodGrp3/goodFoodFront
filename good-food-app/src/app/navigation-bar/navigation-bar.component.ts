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
  dataset = ['Hamburger', 'GoodFood', 'bacon'];

  ngOnInit(): void { }

  goToProfile() {
    console.log("Passe dans la méthode")
    if (localStorage.getItem("passed") == "good") {
      console.log("passe dans le profile")
      this.router.navigateByUrl(this.urlProfile)
    } else {
      console.log("passe dans le login")
      this.router.navigateByUrl(this.urlProfile)
    }
  }

  toggleNavbarCollapse() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
}
