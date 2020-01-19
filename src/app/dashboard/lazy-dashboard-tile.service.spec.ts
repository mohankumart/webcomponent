import { TestBed } from '@angular/core/testing';

import { LazyDashboardTileService } from './lazy-dashboard-tile.service';

describe('LazyDashboardTileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LazyDashboardTileService = TestBed.get(LazyDashboardTileService);
    expect(service).toBeTruthy();
  });
});
