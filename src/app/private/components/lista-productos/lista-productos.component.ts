import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interface/productos.interface';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  products !: Producto[] 
  constructor(private productoService : ProductoService) { }

  ngOnInit(): void {
    this.productoService.getProducts()
      .subscribe(resp=> this.products = resp.productos)
  }


  addProduct(){
    console.log('Todo:/ hacer routerLink a Add.')
  }

}
