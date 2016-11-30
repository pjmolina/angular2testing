import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { By } from '@angular/platform-browser';

import { ShowDetailsComponent } from './show-details.component';
import { RatingPipe } from './shared';
import { Show, ShowService } from '../shared';
import { ActivatedRouteMock, RouterStub, showServiceStub } from '../../testing/mocks';

describe('ShowDetailsComponent', () => {
  let fixture: ComponentFixture<ShowDetailsComponent>;
  let instance: ShowDetailsComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ShowDetailsComponent,
        RatingPipe
      ],
      providers: [
        { provide: ShowService, useValue: showServiceStub },
        { provide: ActivatedRoute, useValue: new ActivatedRouteMock({ params: { id: 0 }})},
        { provide: Router, useClass: RouterStub }
      ]
    });

    fixture = TestBed.createComponent(ShowDetailsComponent);
    instance = fixture.componentInstance;
  });

  it('ask for the show of id 0', inject([ShowService], (showService: ShowService) => {
    spyOn(showService, 'getShow').and.callThrough();
    instance.ngOnInit();
    expect(showService.getShow).toHaveBeenCalledWith(0);
  }));

  it('goes to show list with goBack()', inject([Router], (router: Router) => {
    spyOn(router, 'navigate');
    instance.goBack();
    expect(router.navigate).toHaveBeenCalledWith(['shows']);
  }));

  it('goes to show list by clicking the button', () => {
    spyOn(instance, 'goBack');
    const button = fixture.debugElement.query(By.css('button'));
    button.nativeElement.click();
    expect(instance.goBack).toHaveBeenCalled();
  });

  it('contains the show with id 0', () => {
    fixture.detectChanges();
    const show: Show = instance.show;
    expect(show.id).toBe(0);
    expect(show.name).toBe('Heidi');
    expect(show.cover).toBe('http://heidi.com');
    expect(show.rating).toBe(1);
  });

  it('display the show on the template', () => {
    fixture.detectChanges();
    const h3 = fixture.debugElement.query(By.css('h3')).nativeElement;
    const img: HTMLImageElement = fixture.debugElement.query(By.css('.cover')).nativeElement;
    const p = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(h3.textContent).toBe('Heidi');
    expect(img.src).toBe('http://heidi.com/');
    expect(p.textContent).not.toBe(1);
  });

  it('toggles a class on the img on click', () => {
    fixture.detectChanges();
    const img: HTMLImageElement = fixture.debugElement.query(By.css('.cover')).nativeElement;
    expect(img.getAttribute('class')).not.toContain('big');
    img.click();
    fixture.detectChanges();
    expect(img.getAttribute('class')).toContain('big');
  });
});
