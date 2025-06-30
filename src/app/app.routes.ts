import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
  },
  {
    path: 'bar-chart',
    loadComponent: () => import('./pages/bar-chart-page/bar-chart-page').then(m => m.BarChartPage),
  },
];
