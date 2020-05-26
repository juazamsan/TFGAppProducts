import { Component, OnInit } from '@angular/core';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor() { }
  productsShoppingCart: any[];
  existsProducts: boolean=false;
  
  ngOnInit(): void {
   let productsShoppingCartJSON = sessionStorage.getItem('listCart');
   this.productsShoppingCart = JSON.parse(productsShoppingCartJSON);
   if(this.productsShoppingCart!=null){
      if(this.productsShoppingCart.length>0){
        this.existsProducts=true;
      }
    } 
  }
  
  deleteItem(product){
    let index = this.productsShoppingCart.indexOf(product);
    this.productsShoppingCart.splice(index, 1);
    sessionStorage.setItem('listCart', JSON.stringify(this.productsShoppingCart));
  }

}
