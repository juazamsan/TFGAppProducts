import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/productservice';
import {SharedDataService} from '../service/sharedData.service';
import { SelectItem } from '../models/SelectItem';
import { FilterUtils } from '../utils/filterUtils';
import { Client } from '../models/client';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
  animations: [
      trigger('rowExpansionTrigger', [
          state('void', style({
              transform: 'translateX(-10%)',
              opacity: 0
          })),
          state('active', style({
              transform: 'translateX(0)',
              opacity: 1
          })),
          transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
      ])
  ]
})
export class ListProductComponent implements OnInit {

    cols: any[];
    produccion: SelectItem[];
    colors: SelectItem[];
    yearFilter: number;
    yearTimeout: any;
    listClients: Client[]=[];
    first = 0;
    rows = 10;

    constructor(private productService: ProductService, private dataSharedService: SharedDataService, private router: Router) { }

    ngOnInit() {

        this.productService.getDataProduct();
        this.productService.listClientsObs.subscribe(data=>{
          this.listClients = data;
        })

        this.produccion=[
          {label:'Todas', value:null},
          {label:'Ecológico', value:'Ecologico'},
          {label:'Convencional', value:'Convencional'},
          {label:'Producción integrada', value:'Produccion integrada'},
        ]

        this.cols = [
          { field: 'municipio', header: 'Municipio'},
          { field: 'provincia', header: 'Provincia'},
          { field: 'nombreProducto', header: 'Producto'},
          { field: 'tipoProducto', header: 'Producción'}
        ]

        FilterUtils['custom'] = (value, filter): boolean => {
            if (filter === undefined || filter === null || filter.trim() === '') {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }
            
            return parseInt(filter) > value;
        }
    }

    contactClient(rowData){
      this.dataSharedService.setDataContact(rowData);
      this.router.navigate(['/contact']);
    }


    isLastPage(): boolean {
      return this.first === (this.listClients.length - this.rows);
    }

    isFirstPage(): boolean {
        return this.first === 0;
    }



}
