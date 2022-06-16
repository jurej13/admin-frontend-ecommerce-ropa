import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { AuthResponse } from 'src/app/interface/authResponse.interface';
import { environment } from '../../../environments/environment';
import Swal from 'sweetalert2'
import { GlobalAuthService } from 'src/app/services/global-auth.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl : string = environment.baseUrl
  constructor(private http : HttpClient,
      private authGlobal : GlobalAuthService,
      private router : Router) { }


  login (miFormulario : FormGroup) {
    const url : string = `${this.baseUrl}/auth/login`
    this.http.post<AuthResponse>(url,miFormulario).pipe(
      tap(resp=>{
        if(resp.usuario.rol!='ADMIN_ROLE'){
          Swal.fire({
            title: 'Error!',
            text: 'Only admin user.',
            icon: 'error',
            timer:1000,
            confirmButtonText: 'Intentar de nuevo'
          })
          throw new Error('Only admin user.')
        }
      })
    ).subscribe(resp=>{
      this.authGlobal.saveUser(resp)
      localStorage.setItem('token',resp.token)
      Swal.fire({
        title: 'Success!',
        text: 'Login Success',
        icon: 'success',
        timer:1000,
        confirmButtonText: 'Entering'
      })
      setTimeout(()=>this.router.navigate(['/dashboard/listado']),1000)
      })
  }
}
