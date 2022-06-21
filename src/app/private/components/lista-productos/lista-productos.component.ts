import { Component, OnInit } from '@angular/core';
import {  ConfirmationService, MessageService } from 'primeng/api';
import { Producto } from '../../interface/productos.interface';
import { ProductoService } from '../../services/producto.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  products !: Producto[] 
  constructor(private productoService : ProductoService,
    private confirmationService : ConfirmationService,
    private messageService : MessageService
    ) { }

  ngOnInit(): void {
    this.productoService.getProducts()
      .subscribe((resp : any)=> this.products = resp.productos)
  }

  deleteProduct(idProducto : string){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this product?',
      accept: () => {
        this.productoService.deleteProduct(idProducto).pipe(
          switchMap(_=> this.productoService.getProducts())
        )
          .subscribe((resp: any)=> {
            this.products = resp.productos
            this.messageService.add({severity:'success', summary: 'Success', detail: 'Deleted Success'});
          })
      }
    });
    
  }
 

}
