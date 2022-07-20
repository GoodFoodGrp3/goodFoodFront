import { Component, OnInit } from '@angular/core';
import { Categories } from '../models/categories';
import { Products } from '../models/products';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

  products!: Products[]
  categories!: Categories[]
  cartProductList = [];
  public filterCategory : any
  searchKey:string ="";

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getProducts()
    this.products.forEach((a: any) => {
      Object.assign(a,{quantity: 1, total: a.buy_price})
    })
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      data => {
        console.log(data + "Données des productions")
        this.products = data;
        this.filterCategory = data;
      }
    )
  }

  addToCart(product: any) {
    this.cartService.addToCart(product)
  }

  filter(category:string){
    this.filterCategory = this.products
    .filter((a:any)=>{
      if(a.categories.category_name == category || category==''){
        return a;
      }
    })
  }
}
