import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  adresse = sessionStorage.getItem('adresse');
  public productsCart: any = [];
  paymentHandler: any = null;
  success: boolean = false
  failure: boolean = false
  public total !: number;

  constructor(private checkout: PaymentService, private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getProducts().subscribe(res => {
      this.productsCart = res;
      this.total = this.cartService.getTotalPrice();
    })
    console.log("Adresse de l'user  " + this.adresse)
    this.invokeStripe();
  }

  makePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51LCkM6AwU0JDo7VUTjrkdoOXutkwAR5GBMkWfWpWxBtjDtKPM23mb2QN3qPp1daKArc96guBUtzwdh9UcFFQXG7c00K1Hkegg7',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        paymentstripe(stripeToken);
      },
    });

    const paymentstripe = (stripeToken: any) => {
      this.checkout.makePayment(stripeToken).subscribe((data: any) => {
        console.log(data);
        if (data.data === "success") {
          this.success = true
        }
        else {
          this.failure = true
        }
      });
    };

    paymentHandler.open({
      name: 'Good Food Payment',
      description: 'Veuillez rentrer votre email pour le recu :',
      amount: amount * 100,
    });
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51LCkM6AwU0JDo7VUTjrkdoOXutkwAR5GBMkWfWpWxBtjDtKPM23mb2QN3qPp1daKArc96guBUtzwdh9UcFFQXG7c00K1Hkegg7',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
          },
        });
      };

      window.document.body.appendChild(script);
    }
  }
}
