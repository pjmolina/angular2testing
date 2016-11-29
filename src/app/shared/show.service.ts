import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { Show } from './show';

@Injectable()
export class ShowService {
  constructor(private http: Http) { }

  getShows(): Observable<Show[]> {
    return this.http.get('api/shows')
      .map((res) => res.json().data);
  }
}
