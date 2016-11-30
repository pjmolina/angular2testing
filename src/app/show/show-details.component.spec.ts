import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';

import { ShowDetailsComponent } from './show-details.component';
import { RatingPipe } from './shared';
import { ShowService } from '../shared';
import { showServiceStub, ActivatedRouteMock, RouterStub } from '../../testing/mocks';

describe('ShowDetailsComponent', () => {
  let fixture: ComponentFixture<ShowDetailsComponent>;
  let instance: ShowDetailsComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDetailsComponent, RatingPipe ],
      providers: [
        { provide: ShowService, useValue: showServiceStub },
        { provide: ActivatedRoute, useValue: new ActivatedRouteMock({ params: { id: 0}}) },
        { provide: Router, useClass: RouterStub }
      ]
    });

    fixture = TestBed.createComponent(ShowDetailsComponent);
    instance = fixture.componentInstance;
  });

  it('ask for the show of id 0', () => {

  });


});
