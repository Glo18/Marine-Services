import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipSearchResultComponent } from './ship-search-result.component';

describe('ShipSearchResultComponent', () => {
  let component: ShipSearchResultComponent;
  let fixture: ComponentFixture<ShipSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipSearchResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
