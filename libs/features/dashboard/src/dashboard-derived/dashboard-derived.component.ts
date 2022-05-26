import { Component, Input } from '@angular/core';
import { DashboardData } from '../dashboard-data.service';

@Component({
  selector: 'literate-robot-dashboard-derived',
  templateUrl: './dashboard-derived.component.html',
  styleUrls: ['./dashboard-derived.component.scss'],
})
export class DashboardDerivedComponent {
  @Input() data: DashboardData[] | null;

  constructor() {
    this.data = null;
  }
}
