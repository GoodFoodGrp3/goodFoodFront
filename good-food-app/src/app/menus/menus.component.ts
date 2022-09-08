import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categories } from '../models/categories';
import { Products } from '../models/products';
import { CartService } from '../services/cart.service';
import { CategoriesService } from '../services/categories.service';
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

  constructor(private productService: ProductService, private cartService: CartService, private categoriesService: CategoriesService, private router: Router,) { }

  ngOnInit(): void {
    this.getProducts()
    this.getCategories()
    this.products.forEach((a: any) => {
      Object.assign(a,{quantity: 1, total: a.buy_price})
    })
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      data => {
        console.log(data + "Données des productions")
        this.products = data;
      }
    )
  }

  getCategories() {
    this.categoriesService.getCategories().subscribe(
      data => {
        console.log(data + "Données des Categories")
        this.categories = data;
        this.filterCategory = this.categories;
      }
    )
  }

  addToCart(product: any) {
    if (sessionStorage.getItem('token') != null && sessionStorage.getItem('token')!.length > 1) {
      this.cartService.addToCart(product)
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  filter(category:string){
    this.filterCategory
    .filter((a:any)=>{
      if(a.category_name == category || category==''){
        console.log(a)
        return a;
      }
    })
  }
}
