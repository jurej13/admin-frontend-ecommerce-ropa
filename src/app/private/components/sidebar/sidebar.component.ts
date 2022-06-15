import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  items !: MenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Listado', icon: 'pi pi-fw pi-plus',routerLink:'/dashboard/listado'},
      {label: 'Agregar', icon: 'pi pi-fw pi-download',routerLink:'/dashboard/agregar'},
      {label: 'Undo', icon: 'pi pi-fw pi-refresh'}
    ];
  }

}
