import { Injectable, NgModuleFactoryLoader, Injector, NgModuleRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LazyDashboardTileService {

  constructor(private loader: NgModuleFactoryLoader,
              private injector: Injector) { }

  private moduleRef: NgModuleRef<any>;

  load(): Promise<void> {
    if (this.moduleRef) {
      return Promise.resolve();
    }

    const path = 'src/app/lazy-dashboard-tile/lazy-dashboard-tile.module#LazyDashboardTileModule';

    return this
        .loader
        .load(path)
        .then(moduleFactory => {
            this.moduleRef = moduleFactory.create(this.injector).instance;
            console.log('moduleRef', this.moduleRef);
        })
        .catch(err => {
            console.error('error loading module', err);
        });
  }
}

