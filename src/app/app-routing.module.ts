import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListProductComponent} from '../app/list-product/list-product.component';
import {HomeComponent} from '../app/home/home.component';
import {ContactComponent} from '../app/contact/contact.component';
import {ShoppingCartComponent} from '../app/shopping-cart/shopping-cart.component';
import {PayCartComponent} from '../app/pay-cart/pay-cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'listproducts', component: ListProductComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'shoppingcart', component: ShoppingCartComponent},
  { path: 'paycart', component: PayCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





