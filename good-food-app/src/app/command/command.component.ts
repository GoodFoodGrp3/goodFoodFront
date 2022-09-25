import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {

  priceArray: any = []
  public commands: any = []
  orders: any = []
  public total !: number;
  public total2: number;


  constructor(private cartService: CartService, private orderService: OrderService) { }
  ngOnInit(): void {
    this.orderService.getProducts().subscribe(res => {
      this.commands = res
      this.total = this.orderService.getTotalPrice()
      console.log(this.commands, "<----------- command")
    })
  }
}
