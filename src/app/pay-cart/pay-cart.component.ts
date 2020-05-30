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
    if(productsShoppingCartJSON!=''){
      this.productsShoppingCart = JSON.parse(productsShoppingCartJSON);
    }
    
  }

  backToCart(){
    this.router.navigate(['/shoppingcart']);
  }

  confirm(){
    alert('Reserva confirmada correctamente');
    sessionStorage.setItem('listCart', '');
    this.router.navigate(['/home']);
  }


}
