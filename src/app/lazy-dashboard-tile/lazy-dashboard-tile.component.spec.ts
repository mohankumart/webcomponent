import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyDashboardTileComponent } from './lazy-dashboard-tile.component';

describe('LazyDashboardTileComponent', () => {
  let component: LazyDashboardTileComponent;
  let fixture: ComponentFixture<LazyDashboardTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyDashboardTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyDashboardTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
