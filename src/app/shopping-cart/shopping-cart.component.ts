import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor() { }
  productsShoppingCart: any[];
  
  ngOnInit(): void {
   let productsShoppingCartJSON = sessionStorage.getItem('listCart');
   this.productsShoppingCart = JSON.parse(productsShoppingCartJSON);
  }
  

}
