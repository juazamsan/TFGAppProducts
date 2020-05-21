import { Component, OnInit } from '@angular/core';
import { ProductCar } from '../models/productCar';
import { ProductService } from '../service/productservice';
import { CityQuantityProduct } from '../models/cityQuantityProduct';
import {FieldsetModule} from 'primeng/fieldset';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  responsiveOptions;
  productsCar: ProductCar[] =[];
  listQuantityProductsCity: CityQuantityProduct[]=[];
  latCenter = 37.490205;
  lngCenter = -4.579912;
  markers: any[];
  constructor(private productService: ProductService) {  
    this.productsCar = this.productService.getProductsForCar();
    this.responsiveOptions = [
      {
          breakpoint: '300px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '200px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '100px',
          numVisible: 1,
          numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    this.productService.countProductForCity();

    this.productService.listCityQuantityProductObs.subscribe(data=>{
      if(data.length>0){
        this.listQuantityProductsCity = data;
      }
    })

    



  }

  

}
