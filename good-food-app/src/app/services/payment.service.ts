import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { SuccessModalComponent } from '../modals/success-modal/success-modal.component';
import { CartService } from './cart.service';
import { OrderService } from './order.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(private http: HttpClient, private router: Router, private cartService: CartService, private modalService: NgbModal, private orderService: OrderService) { }

  makePayment(stripeToken: any): Observable<any> {
    const url = "http://localhost:5000/checkout/"
    this.orderService.setProduct(this.cartService.getCarts())
    this.successModal()
   // this.router.navigateByUrl('/payment-success')
    return this.http.post<any>(url, { token: stripeToken })
    
  }

  successModal(/* id:number */) {
    const modalRef = this.modalService.open(SuccessModalComponent,
      {
        backdrop: false,
        //scrollable: true,
        //windowClass: 'myCustomModalClass',
        centered : true,
        keyboard: false,

      });
}
}
