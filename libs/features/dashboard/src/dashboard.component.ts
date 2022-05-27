import { Component } from '@angular/core';
import { share } from 'rxjs';
import { DashboardDataService } from './dashboard-data.service';

@Component({
  selector: 'literate-robot-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  constructor(private dashboardDataService: DashboardDataService) {}

  fetchData() {
    return this.dashboardDataService.fetchData().pipe(share());
  }
}
