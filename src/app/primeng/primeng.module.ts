import { NgModule } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';

@NgModule({
  exports:[
    InputTextModule,
    ButtonModule,
    MenuModule,

  ]
})
export class PrimengModule { }
