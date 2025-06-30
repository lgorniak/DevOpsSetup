import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideEchartsCore } from 'ngx-echarts';

// Import echarts core module
import * as echarts from 'echarts/core';

// Import only the chart types you need
import { BarChart } from 'echarts/charts';

// Import only the components you need
import { TitleComponent, TooltipComponent, GridComponent } from 'echarts/components';

// Import the renderer (required)
import { CanvasRenderer } from 'echarts/renderers';

// Register the required components
echarts.use([BarChart, TitleComponent, TooltipComponent, GridComponent, CanvasRenderer]);

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideEchartsCore({ echarts }),
  ],
};
