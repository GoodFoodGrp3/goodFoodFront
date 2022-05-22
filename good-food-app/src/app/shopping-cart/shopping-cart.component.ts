import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  goToValidation() {
    if(sessionStorage.getItem('token') != null && sessionStorage.getItem('token')!.length > 1)
    {
        this.router.navigateByUrl('/validation');
    } else {
      this.dialog.open(DialogDataExampleDialog, { });
    }
    }
  }

  /* @Component({
    selector: 'dialog-data-example-dialog',
    templateUrl: 'dialog-data-example-dialog.html',
  }) */
  export class DialogDataExampleDialog {
    constructor(@Inject(MAT_DIALOG_DATA) public title: "Veuillez vous connecter!") {}
  }

