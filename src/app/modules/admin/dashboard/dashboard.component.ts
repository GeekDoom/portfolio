import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {


  constructor(
    private router: Router,
    private as: AuthService
  ) { }

  ngOnInit(): void {

  }
  isList!: number;
  isMenu: boolean = false;
  isMenuBtn() {
    this.isMenu = !this.isMenu;
  }
  isSearch: boolean = false;

  logout() {
    this.as.logout();
    this.router.navigateByUrl('/auth')
  }



}
