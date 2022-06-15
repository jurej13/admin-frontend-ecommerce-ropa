import { NgModule } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from 'primeng/dropdown';
import {FileUploadModule} from 'primeng/fileupload';
@NgModule({
  exports:[
    ButtonModule,
    DropdownModule,
    InputTextModule,
    MenuModule,
    TableModule,
    ToolbarModule,
    RadioButtonModule,
    FileUploadModule
  ]
})
export class PrimengModule { }
