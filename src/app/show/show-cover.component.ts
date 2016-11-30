import { Component, Input } from '@angular/core';

@Component({
  selector: 'show-cover',
  template: '<img class="cover" [src]="show.cover" [routerLink]="show.id">'
})
export class ShowCoverComponent {
  @Input() show;
}
