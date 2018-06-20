import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdSliderComponent } from './ad-slider.component';

describe('AdSliderComponent', () => {
  let component: AdSliderComponent;
  let fixture: ComponentFixture<AdSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
