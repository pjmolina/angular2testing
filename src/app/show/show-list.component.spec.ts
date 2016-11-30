import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import { ShowListComponent } from './show-list.component';
import { ShowCoverComponent } from './show-cover.component';
import { ShowService } from '../shared';

describe('ShowListComponent', () => {
  let fixture: ComponentFixture<ShowListComponent>;
  let instance: ShowListComponent;
  let fakeShows;
  let showService: ShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      declarations: [ ShowListComponent, ShowCoverComponent ],
      providers: [
        ShowService
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowListComponent);
    instance = fixture.componentInstance;

    showService = fixture.debugElement.injector.get(ShowService);

    fakeShows = [
      { id: 0, name: 'Heidi', cover: 'casiperono', rating: 1 },
      { id: 1, name: 'Pokemon', cover: 'pikachu.com', rating: 3 },
      { id: 2, name: 'Power Rangers', cover: 'amarillopowa', rating: 2 },
      { id: 3, name: 'Campeones', cover: 'campoinfinito', rating: 1 }
    ];
  });

  it('fetches all shows', () => {
    spyOn(showService, 'getShows').and.returnValue(Observable.of(fakeShows));
    instance.ngOnInit();
    expect(instance.shows.length).toBe(4);
    expect(showService.getShows).toHaveBeenCalled();
  });

  it('renders as many covers as show are', () => {
    spyOn(showService, 'getShows').and.returnValue(Observable.of(fakeShows));
    fixture.detectChanges();
    const covers = fixture.debugElement.queryAll(By.css('show-cover'));
    expect(covers.length).toBe(4);
  });

  it('has a header', () => {
    const header = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(header.textContent).toBe('List of all shows');
  });
});
