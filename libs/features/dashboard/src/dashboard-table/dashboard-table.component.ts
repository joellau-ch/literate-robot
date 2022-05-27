import { formatCurrency, formatDate } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  GridOptions,
  GridReadyEvent,
  ValueFormatterParams,
} from 'ag-grid-community';
import { DashboardData } from '../dashboard-data.service';

@Component({
  selector: 'literate-robot-dashboard-table',
  templateUrl: './dashboard-table.component.html',
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
      columnDefs: [
        {
          headerName: 'Current Timestamp',
          field: 'currentTimestamp',
          colId: 'currentTimestamp',
          type: 'dateColumn',
          valueFormatter({ value }: ValueFormatterParams): string {
            return formatDate(value, 'yyyy-MM-dd HH:mm:ss z', 'en-SG');
          },
        },
        {
          headerName: 'Created At',
          field: 'createdAt',
          colId: 'createdAt',
          type: 'dateColumn',
          valueFormatter({ value }: ValueFormatterParams): string {
            return formatDate(value, 'HH:mm:ss z', 'en-SG');
          },
        },
        {
          headerName: 'Customer Direction',
          field: 'customerDirection',
          colId: 'customerDirection',
        },
        {
          headerName: 'CH Direction',
          field: 'coinhakoDirection',
          colId: 'coinhakoDirection',
        },
        {
          headerName: 'Price',
          field: 'price',
          colId: 'price',
          type: 'numericColumn',
          valueFormatter({ value }: ValueFormatterParams): string {
            return formatCurrency(value, 'en-SG', '', 'USD', `0.9-9`);
          },
        },
        {
          headerName: 'Counter',
          field: 'counter',
          colId: 'counter',
        },
        {
          headerName: 'USD',
          field: 'usd',
          colId: 'usd',
          type: 'numericColumn',
          valueFormatter({ value }: ValueFormatterParams): string {
            return formatCurrency(value, 'en-SG', '$', 'USD', `0.2-2`);
          },
        },
        {
          headerName: 'SGD Amount',
          field: 'sgdAmount',
          colId: 'sgdAmount',
          type: 'numericColumn',
          valueFormatter({ value }: ValueFormatterParams): string {
            return formatCurrency(value, 'en-SG', '$', 'SGD', `0.2-2`);
          },
        },
        {
          headerName: 'Running PnL',
          field: 'runningPnL',
          colId: 'runningPnL',
          type: 'numericColumn',
          valueFormatter({ value }: ValueFormatterParams): string {
            return formatCurrency(value, 'en-SG', '$', 'SGD', `0.2-2`);
          },
        },
        {
          headerName: 'Average Rate',
          field: 'averageRate',
          colId: 'averageRate',
          type: 'numericColumn',
          valueFormatter({ value }: ValueFormatterParams): string {
            return formatCurrency(value, 'en-SG', '', 'USD', `0.7-7`);
          },
        },
      ],
      columnTypes: {
        dateColumn: {
          filter: 'agDateColumnFilter',
          suppressMenu: true,
        },
      },
      defaultColDef: {
        sortable: true,
        filter: true,
        resizable: true,
      },
      onGridReady({ columnApi }: GridReadyEvent): void {
        columnApi.autoSizeAllColumns();
      },
    };
  }
}
