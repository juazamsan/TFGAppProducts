import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pay-cart',
  templateUrl: './pay-cart.component.html',
  styleUrls: ['./pay-cart.component.css']
})
export class PayCartComponent implements OnInit {

  constructor(private router: Router) { }
  productsShoppingCart: any[];


  ngOnInit(): void {
    let productsShoppingCartJSON = sessionStorage.getItem('listCart');
    this.productsShoppingCart = JSON.parse(productsShoppingCartJSON);
  }

  backToCart(){
    this.router.navigate(['/shoppingcart']);
  }

}
