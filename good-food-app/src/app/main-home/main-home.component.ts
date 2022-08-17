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
    {title: "L'ouzbeck de l'ouest", short: 'Restaurent Ouzbekistonais', src: "https://picsum.photos/id/700/900/500"},
    {title: 'Le smaliara', short: 'Restaurant chinois', src: "https://picsum.photos/id/1011/900/500"},
    {title: 'The great hunger', short: 'Restauration anglaise', src: "https://picsum.photos/id/984/900/500"}
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
