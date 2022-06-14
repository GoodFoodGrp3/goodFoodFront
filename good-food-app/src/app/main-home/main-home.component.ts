import { Component, OnInit } from '@angular/core';
import { Office } from '../models/offices';
import { OfficeService } from '../services/office.service';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {

    listOffices!: Office[];

  constructor(private officeService: OfficeService) { }

  ngOnInit(): void {
    this.getOffices()
  }

  getOffices() {
    this.officeService.getOffices().subscribe(
      data => {
        console.log(data + "Données des restaurants")
        this.listOffices = data;
      }
    )
}

}
