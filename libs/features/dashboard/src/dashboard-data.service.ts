import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DashboardMockData } from './dashboard-mock-data';

@Injectable({
  providedIn: 'root',
})
export class DashboardDataService {
  fetchData(): Observable<DashboardData[]> {
    return of(DashboardMockData);
  }
}

export interface DashboardData {
  currentTimestamp: Date;
  createdAt: Date;
  customerDirection: CustomerDirection;
  coinhakoDirection: CoinhakoDirection;
  price: number;
  counter: TradeCounter;
  usd: number;
  sgdAmount: number;
  runningPnL: number;
  averageRate: number;
  check: boolean;
}

export type CustomerDirection = 'buy' | 'sell';
export type CoinhakoDirection = 'short' | 'long';
export type TradeCounter = 'SGD' | 'USD' | string;
