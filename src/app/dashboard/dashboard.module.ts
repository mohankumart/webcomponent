import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';

import { DashboardComponent } from './dashboard.component';
import { DashboardTitleComponent } from './dashboard-title/dashboard-title.component';



@NgModule({
  declarations: [
    DashboardComponent,
    DashboardTitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardComponent
  ],
  entryComponents: [
    DashboardTitleComponent
  ]
})
export class DashboardModule {
  constructor(private injector: Injector) {
    const tileCE = createCustomElement(DashboardTitleComponent, { injector: this.injector });
    customElements.define('dashboard-tile', tileCE);
  }
}


