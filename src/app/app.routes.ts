import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(({ Home }) => Home),
  },
  {
    path: 'bar-chart',
    loadComponent: () =>
      import('./pages/bar-chart-page/bar-chart-page').then(({ BarChartPage }) => BarChartPage),
  },
];
