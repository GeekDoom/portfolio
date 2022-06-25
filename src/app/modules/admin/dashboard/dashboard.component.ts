import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }
  isList!: number;
  isMenu: boolean = false;
  isMenuBtn() {
    this.isMenu = !this.isMenu;
  }
  isSearch: boolean = false;



}
