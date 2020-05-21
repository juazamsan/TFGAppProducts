import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SharedDataService} from '../service/sharedData.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router: Router, private sharedDataService: SharedDataService) { }
  nombre: string;
  email: string;
  telefono: string;
  producto: string;

  ngOnInit(): void {
     if(this.sharedDataService.dataContact!=undefined){
      // tslint:disable-next-line:max-line-length
      this.nombre = this.sharedDataService.dataContact['nombre'] + ' '+ this.sharedDataService.dataContact['primerApellido']+' ' +this.sharedDataService.dataContact['segundoApellido'];
      this.email = this.sharedDataService.dataContact['email'];
      this.producto = this.sharedDataService.dataContact['nombreProducto'];
      this.telefono = this.sharedDataService.dataContact['telefono'];
     }
     
  }

  enviarMensaje(){
    alert('Mensaje enviado correctamente');
    this.router.navigate(['listproducts']);
  }

}
