import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, switchMap } from 'rxjs/operators';
import { CategoriaEnums } from '../../enum/categorias.enum';
import { ProductoSend } from '../../interface/productoSend.interface';
import { ProductoService } from '../../services/producto.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
@Component({
  selector: 'app-agregar-product',
  templateUrl: './agregar-product.component.html',
  styleUrls: ['./agregar-product.component.css']
})
export class AgregarProductComponent implements OnInit {  
  miFormulario : FormGroup = this.fb.group({
    nombre:['buzaso',[Validators.required,Validators.minLength(6)]],
    precio:[3500,[Validators.required,Validators.min(3000)]],
    talle:[40,[Validators.required,Validators.min(32),Validators.max(42)]],
    color:['azul',[Validators.required,Validators.minLength(2)]],
    sexo:['HOMBRE',[Validators.required,Validators.minLength(6)]],
    stock:[15,[Validators.required,Validators.min(3)]],
    categoria:['BUZOS',[Validators.required,Validators.minLength(4)]],
    descripcion:['sdaadasdasdads',[Validators.required,Validators.minLength(6)]],
  })
  
  fileSaves !: any
  categorias : string[] = [CategoriaEnums.buzosNombre,
      CategoriaEnums.camperasNombre,CategoriaEnums.pantalonNombre,
      CategoriaEnums.remerasNombre]
  definirCat !: string

  product !: ProductoSend
  idProduct !: string
  constructor(private fb : FormBuilder,
    private productoService : ProductoService,
    private router : Router
    ) { }
  ngOnInit(): void {
  }
  redefinirCategoria(){
    switch (this.miFormulario.get('categoria')!.value) {
      case (CategoriaEnums.buzosNombre):
        this.definirCat = CategoriaEnums.buzosId 
        break;
      case (CategoriaEnums.camperasNombre):
        this.definirCat= CategoriaEnums.camperasId
        break;
      case (CategoriaEnums.pantalonNombre):
        this.definirCat = CategoriaEnums.pantalonId
        break;
      case (CategoriaEnums.remerasNombre):
        this.definirCat = CategoriaEnums.remerasId
        break;
      default:
        break;
    }
  }
  agregar(){
    if(!this.fileSaves){
      Swal.fire({
        title: 'Error!',
        text: 'Select a image.',
        icon: 'error',
        timer:1000,
        confirmButtonText: 'Select a image.'
      })
      throw Error('Select a image')
    }else{
      this.product = this.miFormulario.value
      this.product.categoria = this.definirCat
      this.productoService.crearProducto(this.product)
      .pipe(
        map(product=> {
          const formData = new FormData()
          formData.append('archivo',this.fileSaves)
          return {id:product._id,archivo : formData};
        }),
        switchMap(({id,archivo})=>this.productoService.uploadImg(id!,archivo))
        ).subscribe( _ =>{ 
          Swal.fire({
            title: 'Success!',
            text: 'Product added with success',
            icon: 'success',
            timer:1000,
            confirmButtonText: 'Redirecting'
          })
          setTimeout(()=>this.router.navigate(['/dashboard/listado']),1000)
          })
      }
    }
    saveFile($event :any){
      this.fileSaves = $event.target.files[0]
    }
}
