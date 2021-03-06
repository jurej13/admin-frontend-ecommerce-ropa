import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { AgregarProductComponent } from './pages/agregar-product/agregar-product.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListaNoDisponiblesComponent } from './components/lista-no-disponibles/lista-no-disponibles.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
    children:[
      {path:'listado',component:ListaProductosComponent},
      {path:'agregar',component:AgregarProductComponent},
      {path:'editar/:id',component:AgregarProductComponent},
      {path:'nodisponibles',component:ListaNoDisponiblesComponent},
      {path:'**',redirectTo:'listado'}
    ]
  },
  {
    path:'**',
    redirectTo:'listado'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
