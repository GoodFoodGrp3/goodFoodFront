import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public commandList = new BehaviorSubject<any>([]);
  public cartItemList : any = [];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }

  getProducts() {
    return this.productList.asObservable();
    console.log(this.productList)
  }

  getCarts() {
    return this.cartItemList
  }

  setProduct(product : any) {
    this.cartItemList.push(...product);
    this.productList.next(product); 
  }

  addToCart(product : any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList)
    this.getTotalPrice();
    console.log(this.cartItemList)
  }

  getTotalPrice(): number {
    let total = 0;
    this.cartItemList.map((a: any) => {
      total += a.buy_price;
    })
    return total;
  }

  removeCartItem(product: any) {
    const index = this.cartItemList.indexOf(product)
    if (index > -1) { // only splice array when item is found
      this.cartItemList.splice(index, 1); // 2nd parameter means remove one item only
    }
    this.productList.next(this.cartItemList);
  }

  removeAllCart() {
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }

  getCommand() {
    return this.commandList.asObservable();
  }
}
