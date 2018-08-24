import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenAllComponent } from './men-all.component';

describe('MenAllComponent', () => {
  let component: MenAllComponent;
  let fixture: ComponentFixture<MenAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
