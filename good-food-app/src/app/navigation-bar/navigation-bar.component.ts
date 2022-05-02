import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  navbarCollapsed = true;
  dataset = ['Hamburger', 'GoodFood', 'bacon'];

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbarCollapse() {
    console.log("SHEEEESH")
    this.navbarCollapsed = !this.navbarCollapsed;
  }

}
