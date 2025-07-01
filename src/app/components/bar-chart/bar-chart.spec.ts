import { BarChart } from './bar-chart';
import { ECharts } from 'echarts/core';

describe('BarChart', () => {
  let component: BarChart;

  beforeEach(() => {
    component = new BarChart();
  });

  describe('Component Creation', () => {
    it('should create component without errors', () => {
      expect(component).toBeTruthy();
      expect(component).toBeInstanceOf(BarChart);
    });
  });

  describe('Chart Options', () => {
    it('should have valid chart options structure', () => {
      expect(component.chartOptions).toBeDefined();
      expect(component.chartOptions.title).toBeDefined();
      expect(component.chartOptions.xAxis).toBeDefined();
      expect(component.chartOptions.yAxis).toBeDefined();
      expect(component.chartOptions.series).toBeDefined();
    });
  });

  describe('Chart Initialization', () => {
    it('should handle chart instance in onChartInit', () => {
      const mockChartInstance: Partial<ECharts> = {
        getWidth: () => 400,
        resize: () => {},
        setOption: () => {},
      };

      // Should not throw when called
      expect(() => component.onChartInit(mockChartInstance as ECharts)).not.toThrow();
    });
  });
});
