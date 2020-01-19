import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyDashboardTileComponent } from './lazy-dashboard-tile.component';
import { createCustomElement } from '@angular/elements';



@NgModule({
  declarations: [
    LazyDashboardTileComponent
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    LazyDashboardTileComponent
  ]
})
export class LazyDashboardTileModule {
  constructor(private injector: Injector) {
    const lazyTileCE = createCustomElement(LazyDashboardTileComponent, { injector: this.injector });
    customElements.define('lazy-dashboard-tile', lazyTileCE);
  }
}

