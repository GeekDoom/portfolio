import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CardsService } from 'src/app/core/services/cards.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Card } from 'src/app/shared/interfaces/Cards';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styles: [`
  .custom-dropzone {
	height: 250px;
	border: 1px solid rgba(14, 165, 233, 0.5);
	border-radius: 5px;
	font-size: 20px;
  background-color: var(--b1);
}`]
})
export class UploadComponent implements OnInit {

  demos!: Card[]
  imageURL!: string;

  demosForm = this.fb.group({
    title: [''],
    link: [''],
    desc: [''],
    imgURL: [''],
    fileSource: [null]
  })



  constructor(
    private fb: FormBuilder,
    private cs: CardsService,
    private router: Router,
    private as: AuthService,
    private _location: Location
  ) { }

  ngOnInit(): void {
  }




  isList!: number;
  isMenu: boolean = false;
  isMenuBtn() {
    this.isMenu = !this.isMenu;
  }
  isSearch: boolean = false;

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.demosForm.patchValue({
      fileSource: file
    });
    const reader = new FileReader();
    reader.onload = () =>
      this.imageURL = reader.result as string;

    reader.readAsDataURL(file)

  }

  onRemove(event: any) {
    
  }


  guardar() {

    const formData = new FormData();
    formData.append('imgURL', this.demosForm.get('fileSource')!.value);
    formData.append('title', this.demosForm.get('title')!.value);
    formData.append('desc', this.demosForm.get('desc')!.value);
    formData.append('link', this.demosForm.get('link')!.value);
    this.cs.addItem(formData)
      .subscribe(item => {
      })
    setTimeout(() => {
      this.router.navigateByUrl("/refresh", { skipLocationChange: true }).then(() => {
        this.router.navigate([decodeURI(this._location.path())]);
      });
    }, 1000)
  }



  logout() {
    this.as.logout();
    this.router.navigateByUrl('/auth')
  }
}
