import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductComponent } from './list-product/list-product.component';
import { HomeComponent } from './home/home.component';
import { TableModule } from 'primeng/table';
import {SliderModule} from 'primeng/slider';
import {DropdownModule} from 'primeng/dropdown';
import {ProductService} from './service/productservice';
import { HttpClientModule } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CarouselModule} from 'primeng/carousel';
import {TabViewModule} from 'primeng/tabview';
import {MenuModule} from 'primeng/menu';
import { AgmCoreModule } from '@agm/core';
import {FieldsetModule} from 'primeng/fieldset';
import { ContactComponent } from './contact/contact.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {SharedDataService} from './service/sharedData.service';
import { FormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


@NgModule({ 
  declarations: [
    AppComponent,
    ListProductComponent,
    HomeComponent,
    ContactComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    SliderModule,
    DropdownModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    TabViewModule,
    MenuModule,
    FieldsetModule,
    InputTextareaModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCCIpXI3FpIT905UdPRfqAp0-dVppujXsU'
    })
  ],
  providers: [ProductService, SharedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
