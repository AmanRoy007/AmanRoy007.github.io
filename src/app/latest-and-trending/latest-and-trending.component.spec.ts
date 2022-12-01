import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestAndTrendingComponent } from './latest-and-trending.component';

describe('LatestAndTrendingComponent', () => {
  let component: LatestAndTrendingComponent;
  let fixture: ComponentFixture<LatestAndTrendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestAndTrendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestAndTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
