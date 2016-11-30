import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ShowCoverComponent } from './show-cover.component';
import { RouterLinkStubDirective } from '../../testing/mocks';

describe('ShowCoverComponent', () => {
  let fixture: ComponentFixture<TestComponent>;
  const html = '<show-cover [show]="show"></show-cover>';
  let img: HTMLImageElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCoverComponent, TestComponent, RouterLinkStubDirective ]
    });
    TestBed.overrideComponent(TestComponent, {set: { template: html }});
    fixture = TestBed.createComponent(TestComponent);

    img = fixture.debugElement.query(By.css('img')).nativeElement;
  });

  it('has an img tag', () => {
    fixture.detectChanges();
    expect(img).toBeDefined();
  });

  it('shows the cover as src', () => {
    fixture.detectChanges();
    expect(img.src).toBe('http://heidi.com/');
  });

  it('sends you to another page on click', () => {
    fixture.detectChanges();
    let linkDebug = fixture.debugElement.query(By.directive(RouterLinkStubDirective));
    let link = linkDebug.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective;
    expect(link.linkParams).toBe(0);
  });
});

@Component({
  selector: 'show-test',
  template: ''
})
class TestComponent {
  show = { id: 0, name: 'Heidi', cover: 'http://heidi.com', rating: 1 };
}
