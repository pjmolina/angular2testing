import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Show, ShowService } from '../shared';

@Component({
  selector: 'show-details',
  template: `
    <div>
      <h3>{{show?.name}}</h3>
      <img class="cover" [class.big]="isBig" [src]="show?.cover" (mouseover)="zoom" (click)="isBig = !isBig">
      <p>Rating: {{show?.rating | showRating }}</p>
    </div>
    <button (click)="goBack()">Go back</button>
  `,
  styleUrls: ['show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {
  private showId;
  show: Show;
  isBig = false;

  constructor(
    activatedRoute: ActivatedRoute,
    private showService: ShowService,
    private router: Router
  ) {
   this.showId = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.showService.getShow(this.showId)
      .subscribe(show => this.show = show);
  }

  goBack() {
    this.router.navigate(['shows']);
  }
}
