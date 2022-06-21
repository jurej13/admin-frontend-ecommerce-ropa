import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ValidatorsAuthService } from '../../services/validators-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  miFormulario : FormGroup = this.fb.group({
    correo:['test@test.com',[Validators.required,Validators.pattern(this.validatorAuth.emailPattern)],],
    password:['123456',[Validators.required,Validators.minLength(6)],] 
  })
  constructor(private fb : FormBuilder,
    private authService : AuthService,
    private validatorAuth : ValidatorsAuthService
    ) { }

 

  login(){
    this.authService.login(this.miFormulario.value)
  }
  tieneError(campo : string) : boolean{
    return this.miFormulario.get(campo)?.invalid  
    && this.miFormulario.get(campo)?.touched
     || false
  }

}
