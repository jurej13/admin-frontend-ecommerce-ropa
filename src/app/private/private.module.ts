import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PrimengModule } from '../primeng/primeng.module';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { ProductoService } from './services/producto.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    ListaProductosComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    PrimengModule,
    HttpClientModule
  ],
  providers:[ProductoService]
})
export class PrivateModule { }
