import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CardsService } from 'src/app/core/services/cards.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styles: [
    `
        .custom-dropzone{
          border: 1px solid #0ea5e9;
        }
    `
  ]
})
export class UploadComponent implements OnInit {

  demosForm = this.fb.group({
    title: [''],
    link: [''],
    desc: [''],
    imgName: ['']
  })



  constructor(
    private fb: FormBuilder,
    private cs: CardsService,
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



  guardar() {
    this.cs.addItem(this.demosForm.value)
      .subscribe(item => {
      })
    window.location.reload();
  }

  logout() {
    this.as.logout();
    this.router.navigateByUrl('/auth')
  }
}
