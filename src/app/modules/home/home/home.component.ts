import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {
  Portfolio?: string = this.Portfolio

  constructor() { }

  ngOnInit(): void {

  }

  scrollToTop() {
    window.scroll(0, 0);
  }




}
