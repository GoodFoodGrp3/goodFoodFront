import { Component, OnInit } from '@angular/core';
import { Products } from '../models/products';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

  products!: Products[]

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }

    getProducts() {
      this.productService.getProducts().subscribe(
        data => {
          console.log(data + "Données des productions")
          this.products = data;
        }
      )


  }

}
