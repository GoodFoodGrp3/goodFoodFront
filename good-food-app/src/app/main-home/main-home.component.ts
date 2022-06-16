import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Office } from '../models/offices';
import { OfficeService } from '../services/office.service';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {

    listOffices!: Office[];
    isSelectedOffice = false;

  constructor(private officeService: OfficeService, private router: Router) { }

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
  }
}
