import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './private/guards/auth.guard';
import { LoadProductsGuard } from './private/guards/load-products.guard';

const routes: Routes = [
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.module').then(m=> m.AuthModule),
    canActivate:[AuthGuard],
    canLoad:[AuthGuard]
  },
  {
    path:'dashboard',
    loadChildren:()=>import('./private/private.module').then(m=>m.PrivateModule),
    canActivate:[LoadProductsGuard],
    canLoad:[LoadProductsGuard]

  },
  {
    path:'**',
    redirectTo:'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
