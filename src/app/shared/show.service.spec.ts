import { inject, TestBed } from '@angular/core/testing';
import {
  BaseRequestOptions,
  Http,
  HttpModule,
  Response,
  ResponseOptions
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { ShowService } from './show.service';

describe('ShowService', () => {
  let showService: ShowService;
  let mockBackend: MockBackend;
  let fakeShows, fakeShow;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ShowService,
        {
          provide: Http,
          useFactory: (backend, options) => {
            return new Http(backend, options);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend,
        BaseRequestOptions
      ]
    });
  });

  beforeEach(inject([ShowService, MockBackend], (service: ShowService, backend: MockBackend) => {
    showService = service;
    mockBackend = backend;

    fakeShows = {
      data: [
        { id: 0, name: 'Heidi', cover: 'casiperono', rating: 1 },
        { id: 1, name: 'Pokemon', cover: 'pikachu.com', rating: 3 },
        { id: 2, name: 'Power Rangers', cover: 'amarillopowa', rating: 2 },
        { id: 3, name: 'Campeones', cover: 'campoinfinito', rating: 1 }
      ]
    };

    fakeShow = {
      data: { id: 1, name: 'Barrio Sésamo', cover: 'galletas', rating: 3 }
    };
  }));

  it('gets the list of shows', () => {
    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(fakeShows)
      })));
    });

    showService.getShows().subscribe((shows) => {
      expect(shows.length).toBe(4);
      expect(shows[0].name).toBe('Heidi');
      expect(shows[2].cover).toBe('amarillopowa');
    });
  });

  it('gets one show', () => {
    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(fakeShow)
      })));
    });

    showService.getShow(20).subscribe((show) => {
      expect(show.name).toBe('Barrio Sésamo');
    });
  });

  it('gets one show from api/shows/1', inject([Http], (http: Http) => {
    spyOn(http, 'get').and.callThrough();
    showService.getShow(1);
    expect(http.get).toHaveBeenCalledWith('api/shows/1');
  }));
});
