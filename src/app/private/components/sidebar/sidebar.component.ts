import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { GlobalAuthService } from 'src/app/services/global-auth.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  items !: MenuItem[];
  constructor(private authGlobal : GlobalAuthService) { }

  ngOnInit(): void {
    this.items = [
      {label: 'Listado', icon: 'pi pi-fw pi-plus',routerLink:'/dashboard/listado'},
      {label: 'Agregar', icon: 'pi pi-fw pi-download',routerLink:'/dashboard/agregar'},
      {label: 'No disponibles', icon: 'pi pi-fw pi-download',routerLink:'/dashboard/nodisponibles'},
      {label: 'logout', icon: 'pi pi-fw pi-refresh',routerLink:'/auth',command:()=>this.authGlobal.logout()}
    ];
  }

}
