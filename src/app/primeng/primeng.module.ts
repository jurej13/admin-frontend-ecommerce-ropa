import { NgModule } from '@angular/core';


import {ButtonModule} from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DropdownModule} from 'primeng/dropdown';
import {FileUploadModule} from 'primeng/fileupload';
import {InputTextModule} from 'primeng/inputtext';
import {InputSwitchModule} from 'primeng/inputswitch';
import {MenuModule} from 'primeng/menu';
import {RadioButtonModule} from 'primeng/radiobutton';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {ToastModule} from 'primeng/toast';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
@NgModule({
  exports:[
    ButtonModule,
    ConfirmDialogModule,
    DropdownModule,
    InputTextModule,
    InputSwitchModule,
    FileUploadModule,
    MenuModule,
    TableModule,
    ToolbarModule,
    RadioButtonModule,
    ToastModule,
    ProgressSpinnerModule,
  ]
})
export class PrimengModule { }
