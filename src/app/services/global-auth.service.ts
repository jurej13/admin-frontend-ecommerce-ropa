import { Injectable } from '@angular/core';
import { AuthResponse } from '../interface/authResponse.interface';
import Swal from 'sweetalert2'
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class GlobalAuthService {
  private _usuario !: AuthResponse
  private token$ : BehaviorSubject<string> = new BehaviorSubject<string>('')
  get usuario(){
    return {...this._usuario}
  }
  
  constructor(private router : Router) { }
  get token(){
    return this.token$.asObservable()
  }
  set tokenData(data : string){
    this.token$.next(data)
  }

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
    }).finally(()=>{this.tokenData = ''
      this.router.navigate(['auth'])
  })
    
  }
}
