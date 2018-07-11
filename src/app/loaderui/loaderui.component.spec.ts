import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderuiComponent } from './loaderui.component';

describe('LoaderuiComponent', () => {
  let component: LoaderuiComponent;
  let fixture: ComponentFixture<LoaderuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
