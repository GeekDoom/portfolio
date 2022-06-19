import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../interfaces/Cards';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(cardImg: Card): string {
    return `assets/images/${cardImg.id}.webp`;
  }

}