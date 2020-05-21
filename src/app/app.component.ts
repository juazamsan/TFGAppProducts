import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TFGAppProductsNatural';

  items: MenuItem[];

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
        this.items = [
                {label: 'Home', icon: 'pi pi-fw pi-home', routerLink:'home'},
                {label: 'Listado Productos', icon: 'pi pi-fw pi-list', routerLink:'listproducts'}
     
        ];
    }

}
