import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Office } from '../models/offices';
import { OfficeService } from '../services/office.service';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {
  title = 'ng-carousel-demo';
  
  images = [
    {title: "L'ouzbeck de l'ouest", short: 'Restaurent Ouzbekistonais', src: "assets/carroussel1.jpg"},
    {title: 'Le smaliara', short: 'Restaurant chinois', src: "assets/carroussel2.jpg"},
    {title: 'The great hunger', short: 'Restauration anglaise', src: "assets/carroussel3.jpg"}
  ];
    listOffices!: Office[];
    isSelectedOffice = false;

  constructor(private officeService: OfficeService, private router: Router, config: NgbCarouselConfig) {

   }

  ngOnInit(): void {
    this.getOffices()
  }

  getOffices() {
    this.officeService.getOffices().subscribe(
      data => {
        console.log("Les datas   --->  " + data)
        this.listOffices = data;
        console.log(this.listOffices + "Données des restaurants")
      }
    )
}

  selectOffice() {
    this.isSelectedOffice = true;
    this.router.navigateByUrl('/home');
    localStorage.setItem('keyOffice', 'open');
  }
}
