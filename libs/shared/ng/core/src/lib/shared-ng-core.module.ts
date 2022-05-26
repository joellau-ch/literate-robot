import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';

/**
 * To be imported ONCE in the angular project's root module
 */
@NgModule({
  imports: [HttpClientModule],
})
export class SharedNgCoreModule {
  static forRoot(): ModuleWithProviders<SharedNgCoreModule> {
    return {
      ngModule: SharedNgCoreModule,
    };
  }
}
