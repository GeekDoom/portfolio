import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../interfaces/Cards';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {



  transform(cardImg: Card): string {
    if (!cardImg.imgURL) {
      return 'assets/img/no-image.png';
    } else {
      return cardImg.imgURL!;
    }
  }

}
