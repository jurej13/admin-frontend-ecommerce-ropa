import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../interface/productos.interface';
import { GlobalAuthService } from 'src/app/services/global-auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  baseUrl : string = environment.baseUrl
  token !: string
  constructor(private http : HttpClient,private authGlobal : GlobalAuthService) {
    this.token = this.authGlobal.usuario.token

   }
  getProducts() : Observable<any>{
    const url : string = `${this.baseUrl}/productos/todosproductos`
    return this.http.get<any>(url)
  }
  crearProducto(producto : Producto) : Observable<Producto>{
    const url : string = `${this.baseUrl}/productos`
    const headers = new HttpHeaders()
      .set('x-token',this.token)
    return this.http.post<Producto>(url,producto,{headers})
  }
}
