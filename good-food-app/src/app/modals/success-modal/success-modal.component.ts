import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.css']
})
export class SuccessModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.removeAllCart()
  }

  closeModal() {
    this.activeModal.dismiss();
    //window.location.reload();
  }

  validateModal(){
    this.activeModal.close();
    this.router.navigateByUrl('/home')
  }
}
