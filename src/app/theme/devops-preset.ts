import Aura from '@primeng/themes/aura';

export const DevOpsPreset = {
  preset: Aura,
  options: {
    prefix: 'p',
    darkModeSelector: 'system',
    cssLayer: false,
  },
};

export const DevOpsThemeConfig = {
  ripple: true,
  inputVariant: 'filled' as const,
};
