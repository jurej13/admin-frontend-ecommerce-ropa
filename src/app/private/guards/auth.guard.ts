import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalAuthService } from 'src/app/services/global-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  token : string | null = ''
  constructor(private router : Router){
    this.token = localStorage.getItem('token')
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if(this.token != null){
        this.router.navigate(['dashboard/listado'])
        return false;
      }else{
        return true
    }
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if(this.token != null){
        this.router.navigate(['dashboard/listado'])
        return false;
      }else{
        return true
      }
  }
}
