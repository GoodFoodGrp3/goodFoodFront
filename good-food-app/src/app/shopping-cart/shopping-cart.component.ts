import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public productsCart: any = [];
  public total !: number;

  constructor(private router: Router, public dialog: MatDialog, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res => {
      this.productsCart = res;
      this.total = this.cartService.getTotalPrice();
    })
  }

  goToValidation() {
      this.router.navigateByUrl('/payment');
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }

  emptyCart() {
    this.cartService.removeAllCart();
  }

  /* getCartProduct() {
   this.productsCart =  this.cartService.getProducts()
   console.log(this.productsCart)
  } */
}

export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public title: "Veuillez vous connecter!") { }
}

