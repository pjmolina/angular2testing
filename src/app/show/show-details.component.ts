import { Component, Input } from '@angular/core';

@Component({
  selector: 'show-details',
  template: `
    <h3>{{name}}</h3>
    <img [src]="cover">
    <p>Rating: {{rating | showRating }}</p>
  `,
  styleUrls: ['show-details.component.css']
})
export class ShowDetailsComponent {
  @Input() name;
  @Input() cover;
  @Input() rating;
}
