import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BarChart } from '../../components/bar-chart/bar-chart';

@Component({
  selector: 'app-bar-chart-page',
  standalone: true,
  imports: [RouterLink, BarChart],
  templateUrl: './bar-chart-page.html',
  styleUrl: './bar-chart-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarChartPage {}
