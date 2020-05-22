import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import { Client } from '../models/client';
import {listProducts} from '../models/listProducts';
import {listProductsImages} from '../models/listProductsImages';
import {CityQuantityProduct} from '../models/cityQuantityProduct';
@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  listClients: Client[]=[];
  listCityQuantityProduct: CityQuantityProduct[]=[];
  listProductsImage: any[];
  contHuelva: number=0;
  contCadiz: number=0;
  contSevilla: number=0;
  contCordoba: number=0;
  contMalaga: number=0;
  contJaen: number=0;
  contGranada: number=0;
  contAlmeria: number=0;

  public listClientsObs = new BehaviorSubject([]);
  currentListClientsObs = this.listClientsObs.asObservable();
  public listCityQuantityProductObs = new BehaviorSubject([]);
  currentListCityQuantityProductObs = this.listCityQuantityProductObs.asObservable();

  getDataFromCsv(): Observable<any> {
    return this.http.get('assets/data/od_ventadirecta_abril_csv.csv', {
        observe: 'response',
        responseType: 'text',
      });
  }
  
  getDataProduct(){
    this.getDataFromCsv().subscribe(res => {
      this.listClients = this.callTransformData(res['body']);  
      this.listClientsObs.next(this.listClients);
    });
  }
  
  callTransformData(dataProducts){
    var lines = dataProducts.split('\n');
    var headers = lines[0].split(';');
    var objList: any[]=[];
    for (var i = 1; i < lines.length ; i++) {
        var obj={};
        var currentline = lines[i].split(';');
        for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }
        objList.push(obj)
    }
    return this.objToClientModel(objList);
  } 


objToClientModel(objList){
    var listResult: Client[]=[];
    let idCont: number=0;
    let contHuelva: number=0;
    let contCadiz: number=0;
    let contSevilla: number=0;
    let contCordoba: number=0;
    let contMalaga: number=0;
    let contJaen: number=0;
    let contGranada: number=0;
    let contAlmeria: number=0;
    let listProductsImage = this.ToArrayImage();
    for (let obj of objList) {
      let productArray = this.ToArray();
      let tProducto='';
      let nProducto='';
      let numProductos: string[]=[];
      for(let pro of productArray){
          if(obj[pro]=='TRUE'){
            if(pro=='Convencional'){
              tProducto = 'Convencional';
            }else if(pro=='Ecológico'){
              tProducto = 'Ecologico';
            }else if(pro=='Producción integrada'){
              tProducto = 'Produccion integrada';
            }else{
              numProductos.push(pro);
            }
          }
      }
      for(let producto of numProductos){
          var client: Client = {
            id: idCont,
            fechaActualizacion : obj['FECHA_ACTUALIZACION'],
            provincia : obj['PROVINCIA'],
            municipio : obj['MUNICIPIO'],
            nombre : obj['NOMBRE O RAZÓN SOCIAL'],
            primerApellido : obj['PRIMER APELLIDO'],
            segundoApellido : obj['SEGUNDO APELLIDO'],
            telefono : obj['NÚMERO TELÉFONO'],
            email : obj['CORREO ELECTRÓNICO'],
            direccion : obj['DIRECCIÓN'],
            codigoPostal : obj['CÓDIGO POSTAL'],
            nombreProducto: producto,
            tipoProducto : tProducto,
            imageProducto: listProductsImage[producto]
          }
          listResult.push(client);
          idCont= idCont + 1;

          switch(client.provincia){
              case 'HUELVA':
                  contHuelva = contHuelva+1;
                  break;
              case 'CÁDIZ':
                  contCadiz = contCadiz+1;
                  break;
              case 'SEVILLA':
                  contSevilla = contSevilla+1;
                  break;
              case 'CÓRDOBA': 
                  contCordoba = contCordoba+1;
                  break;
              case 'MÁLAGA':
                  contMalaga = contMalaga+1;
                  break;
              case 'JAÉN':
                  contJaen = contJaen+1;
                  break;
              case 'GRANADA':
                  contGranada = contGranada+1;
                  break;
              case 'ALMERÍA':
                  contAlmeria = contAlmeria+1;
                  break;   
          }

        }
      
    } 
    this.contHuelva = contHuelva;
    this.contCadiz = contCadiz;
    this.contSevilla = contSevilla;
    this.contCordoba = contCordoba;
    this.contMalaga = contMalaga;
    this.contJaen = contJaen;
    this.contGranada = contGranada;
    this.contAlmeria = contAlmeria;
    return listResult;  
  }

ToArray() {
    return Object.keys(listProducts)
        .map(key => listProducts[key]);
  }

  ToArrayImage(){
    return listProductsImages;
  }

countProductForCity(){
  this.getDataFromCsv().subscribe(res => {
    this.listClients = this.callTransformData(res['body']);  
    if(this.listClients.length>0){
      this.getListCountProduct();
    } 
  });
}

getListCountProduct(){
  this.listCityQuantityProduct = [];

  let quantityHuelva: CityQuantityProduct={
    city: 'HUELVA',
    latitude: 37.262465,
    longitude: -6.944411,
    quantity:this.contHuelva.toString(),
    info: ''
  }
  this.listCityQuantityProduct.push(quantityHuelva);

  let quantityCadiz: CityQuantityProduct={
    city: 'CÁDIZ',
    latitude: 36.529487, 
    longitude:-6.288819,
    quantity:this.contCadiz.toString(),
    info: ''
  }
  this.listCityQuantityProduct.push(quantityCadiz);

  let quantitySevilla: CityQuantityProduct={
    city: 'SEVILLA',
    latitude: 37.394446, 
    longitude:-5.984930,
    quantity:this.contSevilla.toString(),
    info: ''
  }
  this.listCityQuantityProduct.push(quantitySevilla);

  let quantityCordoba: CityQuantityProduct={
    city: 'CÓRDOBA',
    latitude: 37.889643, 
    longitude:-4.783284,
    quantity:this.contCordoba.toString(),
    info: ''
  }
  this.listCityQuantityProduct.push(quantityCordoba);

  let quantityMalaga: CityQuantityProduct={
    city: 'MÁLAGA',
    latitude: 36.728383, 
    longitude: -4.422490,
    quantity:this.contMalaga.toString(),
    info: ''
  }
  this.listCityQuantityProduct.push(quantityMalaga);

  let quantityJaen: CityQuantityProduct={
    city: 'JAÉN',
    latitude: 37.774662, 
    longitude: -3.788283,
    quantity:this.contJaen.toString(),
    info: ''
  }
  this.listCityQuantityProduct.push(quantityJaen);

  let quantityGranada: CityQuantityProduct={
    city: 'GRANADA',
    latitude: 37.181078, 
    longitude: -3.601057,
    quantity:this.contGranada.toString(),
    info: ''
  }
  this.listCityQuantityProduct.push(quantityGranada);

  let quantityAlmeria: CityQuantityProduct={
    city: 'ALMERÍA',
    latitude: 36.836165, 
    longitude: -2.459520,
    quantity:this.contAlmeria.toString(),
    info: ''
  }
  this.listCityQuantityProduct.push(quantityAlmeria);

  this.listCityQuantityProductObs.next(this.listCityQuantityProduct);
}


}