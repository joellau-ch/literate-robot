import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedNgCommonModule } from '@literate-robot/shared/ng/common';
import { SharedNgCoreModule } from '@literate-robot/shared/ng/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular
    BrowserModule,

    // Third Party

    // Comomon & Common Modules
    SharedNgCoreModule.forRoot(),
    SharedNgCommonModule,

    // App Module
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
