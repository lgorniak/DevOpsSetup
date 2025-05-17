import { Routes } from '@angular/router';
import { routes } from './app.routes';

describe('App Routes', () => {
  it('should have routes configured', () => {
    expect(routes).toBeDefined();
    expect(Array.isArray(routes)).toBeTruthy();
  });

  it('should have valid route configurations', () => {
    routes.forEach(route => {
      expect(route).toBeDefined();
    });
  });
});
