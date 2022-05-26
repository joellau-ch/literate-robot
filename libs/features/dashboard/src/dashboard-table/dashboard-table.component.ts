import { Component, Input } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { DashboardData } from '../dashboard-data.service';

@Component({
  selector: 'literate-robot-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss'],
})
export class DashboardTableComponent {
  @Input() data: DashboardData[] | null;
  gridOptions: GridOptions;

  constructor() {
    this.data = null;
    this.gridOptions = this.getGridOptions();
  }

  getGridOptions(): GridOptions {
    return {
      defaultColDef: {
        sortable: true,
        filter: true,
      },
      columnDefs: [
        {
          headerName: 'Current Timestamp',
          field: 'currentTimestamp',
          colId: 'currentTimestamp',
          type: 'dateColumn',
        },
        {
          headerName: 'Created At',
          field: 'createdAt',
          colId: 'createdAt',
          type: 'dateColumn',
        },
        {
          headerName: 'Customer Direction',
          field: 'customerDirection',
          colId: 'customerDirection',
          filter: 'agNumberColumnFilter',
        },
        {
          headerName: 'CH Direction',
          field: 'coinhakoDirection',
          colId: 'coinhakoDirection',
          filter: 'agNumberColumnFilter',
        },
        {
          headerName: 'Price',
          field: 'price',
          colId: 'price',
          filter: 'agNumberColumnFilter',
        },
        {
          headerName: 'Counter',
          field: 'counter',
          colId: 'counter',
          filter: 'agNumberColumnFilter',
        },
        {
          headerName: 'USD',
          field: 'usd',
          colId: 'usd',
          filter: 'agNumberColumnFilter',
        },
        {
          headerName: 'SGD Amount',
          field: 'sgdAmount',
          colId: 'sgdAmount',
          filter: 'agNumberColumnFilter',
        },
        {
          headerName: 'Running PnL',
          field: 'runningPnL',
          colId: 'runningPnL',
          filter: 'agNumberColumnFilter',
        },
        {
          headerName: 'Average Rate',
          field: 'averageRate',
          colId: 'averageRate',
          filter: 'agNumberColumnFilter',
        },
        {
          headerName: 'Check',
          field: 'check',
          colId: 'check',
        },
      ],
      columnTypes: {
        dateColumn: {
          filter: 'agDateColumnFilter',
          suppressMenu: true,
        },
      },
    };
  }
}
