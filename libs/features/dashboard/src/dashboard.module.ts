import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardTableComponent } from './dashboard-table/dashboard-table.component';
import { DashboardComponent } from './dashboard.component';
import { SharedNgCommonModule } from '@literate-robot/shared/ng/common';

@NgModule({
  declarations: [DashboardComponent, DashboardTableComponent],
  imports: [SharedNgCommonModule, DashboardRoutingModule, AgGridModule],
})
export class DashboardModule {}
