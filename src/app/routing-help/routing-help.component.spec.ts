import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingHelpComponent } from './routing-help.component';

describe('RoutingHelpComponent', () => {
  let component: RoutingHelpComponent;
  let fixture: ComponentFixture<RoutingHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
