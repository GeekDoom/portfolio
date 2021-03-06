import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CardsComponent } from './cards/cards.component';
import { ImagenPipe } from './pipe/imagen.pipe';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CardsComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    ImagenPipe,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CardsComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
  ]
})
export class SharedModule { }
