import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Show, ShowService } from '../shared';

@Component({
  selector: 'show-details',
  template: `
    <h3>{{show?.name}}</h3>
    <img class="cover" [src]="show?.cover">
    <p>Rating: {{show?.rating | showRating }}</p>
  `,
  styleUrls: ['show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {
  private showId;
  show: Show;

  constructor(activatedRoute: ActivatedRoute, private showService: ShowService) {
   this.showId = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.showService.getShow(this.showId)
      .subscribe(show => this.show = show);
  }
}
