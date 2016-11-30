import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showRating'
})
export class RatingPipe implements PipeTransform {
  transform(rating) {
    switch (rating) {
      case 1:
        return 'Awesome show';
      case 2:
        return 'Not bad, you can watch it';
      case 3:
        return 'Terrible, better go code Java';
      default:
        return 'Wrong rating, it isn\'t that hard';
    }
  }
}
