import { Injectable } from '@angular/core';
import { AuthResponse } from '../interface/authResponse.interface';
import Swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class GlobalAuthService {
  private _usuario !: AuthResponse
  get usuario(){
    return {...this._usuario}
  }
  
  constructor() { }
  saveUser(usuario : AuthResponse){
    this._usuario=usuario
  }
  logout(){
    Swal.fire({
      title: 'Success!',
      text: 'Logout Success',
      icon: 'success',
      timer:1000,
      confirmButtonText: 'Entering'
    }).finally(()=>localStorage.clear())
    
  }
}
