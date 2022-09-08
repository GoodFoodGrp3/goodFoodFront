import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

 adresse = sessionStorage.getItem('adresse');

  constructor() { }

  ngOnInit(): void {
    console.log("Adresse de l'user  " + this.adresse)
  }

}
