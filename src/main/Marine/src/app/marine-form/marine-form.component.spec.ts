import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarineFormComponent } from './marine-form.component';

describe('MarineFormComponent', () => {
  let component: MarineFormComponent;
  let fixture: ComponentFixture<MarineFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarineFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
