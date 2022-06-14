import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../interface/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  baseUrl : string = environment.baseUrl
  constructor(private http : HttpClient) { }
  getProducts() : Observable<Producto[]>{
    const url : string = `${this.baseUrl}/productos/todosproductos`
    return this.http.get<Producto[]>(url)
  }
}
