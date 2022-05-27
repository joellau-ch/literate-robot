import { Component, Input } from '@angular/core';
import { DashboardData } from '../dashboard-data.service';

@Component({
  selector: 'literate-robot-dashboard-derived',
  templateUrl: './dashboard-derived.component.html',
})
export class DashboardDerivedComponent {
  @Input() data: DashboardData[] | null;

  today: Date;

  constructor() {
    this.data = null;
    this.today = new Date();
  }
}
