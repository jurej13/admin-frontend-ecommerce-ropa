import { NgModule } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from 'primeng/dropdown';
import {FileUploadModule} from 'primeng/fileupload';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';
@NgModule({
  exports:[
    ButtonModule,
    ConfirmDialogModule,
    DropdownModule,
    InputTextModule,
    FileUploadModule,
    MenuModule,
    TableModule,
    ToolbarModule,
    RadioButtonModule,
    ToastModule,
  ]
})
export class PrimengModule { }
