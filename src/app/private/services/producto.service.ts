import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable } from 'rxjs';
import {  map, shareReplay } from 'rxjs/operators';
import { GlobalAuthService } from 'src/app/services/global-auth.service';
import { ProductoSend } from '../interface/productoSend.interface';
import { Producto } from '../interface/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  baseUrl : string = environment.baseUrl
  token : string 
  constructor(private http : HttpClient,private authGlobal : GlobalAuthService) {
    this.token = localStorage.getItem('token')!
   }
  getProducts() : Observable<Producto[]>{
    const url : string = `${this.baseUrl}/productos/todosproductos`
    return this.http.get<Producto[]>(url).pipe(
      map((resp:any)=> resp.productos)
      
    )
  }
  crearProducto(producto : ProductoSend) : Observable<ProductoSend>{
    const url : string = `${this.baseUrl}/productos`
    const headers = new HttpHeaders()
      .set('x-token',this.token)
    return this.http.post<ProductoSend>(url,producto,{headers})
  }
  uploadImg(idProducto : string,archivo : any){
    
    const url : string = `${this.baseUrl}/uploads/productos/${idProducto}`
    return this.http.put(url,archivo)
  }
  deleteProduct(idProducto: string) : Observable<Producto[]>{
    const url : string = `${this.baseUrl}/productos/${idProducto}`
    const headers = new HttpHeaders()
      .set('x-token',this.token)
    return this.http.delete<Producto[]>(url,{headers})
  }

  getProductoById (idProducto : string) : Observable<Producto>{
    const url : string = `${this.baseUrl}/productos/${idProducto}`
    return this.http.get<Producto>(url)
  }
  updateProductById(producto : ProductoSend,idProducto : string) {
    const url : string = `${this.baseUrl}/productos/${idProducto}`
    const headers = new HttpHeaders()
      .set('x-token',this.token)
    return this.http.put(url,producto,{headers})
  }
}
