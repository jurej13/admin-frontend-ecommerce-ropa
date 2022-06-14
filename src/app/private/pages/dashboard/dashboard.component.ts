import { Component, OnInit } from '@angular/core';
import { GlobalAuthService } from 'src/app/services/global-auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  get usuario(){
    return this.authGlobal.usuario
  }
  constructor(private authGlobal : GlobalAuthService) { }

  ngOnInit(): void {
  }

}
