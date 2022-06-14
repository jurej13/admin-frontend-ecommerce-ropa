import { Injectable } from '@angular/core';
import { AuthResponse } from '../interface/authResponse.interface';

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
}
