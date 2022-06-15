import { NgModule } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
@NgModule({
  exports:[
    InputTextModule,
    ButtonModule,
    MenuModule,
    TableModule,
    ToolbarModule
  ]
})
export class PrimengModule { }
