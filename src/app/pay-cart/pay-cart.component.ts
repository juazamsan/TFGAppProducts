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
  nombre: string='';
  mail: string = '';
  telefono: string='';

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
    if(this.nombre=='' || this.telefono=='' || this.mail==''){
      alert('Debe rellenar los datos de contacto antes de solicitar la reserva');
      return;
    }

    alert('Reserva confirmada correctamente. Los vendederos se pondrán en contacto con usted lo antes posible. Muchas gracias');
    sessionStorage.setItem('listCart', '');
    this.router.navigate(['/home']);
  }


}
