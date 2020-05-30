import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { CityQuantityProduct } from '../models/cityQuantityProduct';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  responsiveOptions;
  listQuantityProductsCity: CityQuantityProduct[]=[];
  latCenter = 37.490205;
  lngCenter = -4.579912;
  markers: any[];
  constructor(private productService: ProductService) {  
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
