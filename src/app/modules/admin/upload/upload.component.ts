import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CardsService } from 'src/app/core/services/cards.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styles: [
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
    private cs: CardsService
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
      .subscribe()
  }
}
