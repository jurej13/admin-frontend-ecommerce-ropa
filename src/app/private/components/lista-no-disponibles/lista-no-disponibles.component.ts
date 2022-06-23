import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interface/productos.interface';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-lista-no-disponibles',
  templateUrl: './lista-no-disponibles.component.html',
  styleUrls: ['./lista-no-disponibles.component.css']
})
export class ListaNoDisponiblesComponent implements OnInit {
  products !: Producto[]
  constructor(private productoService : ProductoService) { }

  ngOnInit(): void {
    this.productoService.getProductsNoDisponibles()
      .subscribe(resp=> this.products = resp)
  }

}
