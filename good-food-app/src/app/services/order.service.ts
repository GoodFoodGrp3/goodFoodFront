import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public commandList = new BehaviorSubject<any>([]);
  public commandItemList: any = [];

  constructor() { }

  getProducts() {
    return this.commandList.asObservable();
    console.log(this.commandList)
  }

  setProduct(command: any[]) {
    this.commandItemList.push(command);
    this.commandList.next(this.commandItemList)
    this.getTotalPrice();
    console.log(this.getTotalPrice, " <----------------------- TOTAL")
  }

  getTotalPrice(): number {
    console.log(this.commandItemList, "Item list")
    let total = 0;
    this.commandItemList.map((a: any) => {
      a.map((x: any) => {
        Object.assign({}, x, { "totalprice": total })
        console.log(x , "A TRAVAILLER")
        console.log(x.buy_price, "INFOI PRIX")
        total += x.buy_price;
      })
    })
    return total;
  }
}
