import { Component, OnInit } from '@angular/core';

import { Show, ShowService } from '../shared';

@Component({
  selector: 'show-list',
  templateUrl: 'show-list.component.html'
})
export class ShowListComponent implements OnInit {
  shows: Show[] = [];

  constructor(private showService: ShowService) {}

  ngOnInit() {
    this.showService.getShows()
      .subscribe((shows) => this.shows = shows);
  }
}
