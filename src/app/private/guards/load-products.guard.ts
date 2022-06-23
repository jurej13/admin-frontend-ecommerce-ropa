import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalAuthService } from 'src/app/services/global-auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoadProductsGuard implements CanActivate, CanLoad {
  token$ : Observable<string>
  token !: string
  constructor(private router : Router,authGlobal : GlobalAuthService){
    this.token$ = authGlobal.token
    this.token$.subscribe(resp => this.token = resp)
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.token == ''){
      this.router.navigate(['auth'])
      return false;
    }else{
      return true
    }
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.token == ''){
        this.router.navigate(['auth'])
        return false;
      }else{
        return true
      }
  }
}
