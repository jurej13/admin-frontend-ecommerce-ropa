import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PrimengModule } from '../primeng/primeng.module';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { ProductoService } from './services/producto.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AgregarProductComponent } from './pages/agregar-product/agregar-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SpinnerInterceptor } from './interceptors/spinner.interceptor';
import { CacheInterceptor } from './interceptors/cache.interceptor';
import { ListaNoDisponiblesComponent } from './components/lista-no-disponibles/lista-no-disponibles.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    ListaProductosComponent,
    AgregarProductComponent,
    ListaNoDisponiblesComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    PrimengModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[ProductoService,ConfirmationService,MessageService,
  {provide:HTTP_INTERCEPTORS,useClass:SpinnerInterceptor,multi:true},
  {provide:HTTP_INTERCEPTORS,useClass:CacheInterceptor,multi:true}
  ]
})
export class PrivateModule { }
