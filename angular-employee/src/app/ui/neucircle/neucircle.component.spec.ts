import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeucircleComponent } from './neucircle.component';

describe('NeucircleComponent', () => {
  let component: NeucircleComponent;
  let fixture: ComponentFixture<NeucircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeucircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeucircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
