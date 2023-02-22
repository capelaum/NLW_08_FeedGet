import { createStitches } from '@stitches/react'

export const {
  config,
  theme,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',
      black: '#000',

      brand500: '#8257E5',
      brand400: '#996DFF',
      brandText: '#fff',

      // Dark theme
      darkBgPrimary: '#18181b',
      darkBgSecondary: '#27272a',
      darkBgSecondaryHover: '#3f3f46',

      darkStroke: '#52525b',
      darkTooltip: '#f4f4f5',
      darkTextOnTooltip: '#27272a',

      darkTextPrimary: '#f4f4f5',
      darkTextSecondary: '#a1a1aa',

      // Light theme
      lightBgPrimary: '#FFFFFF',
      lightBgSecondary: '#f4f4f5',
      lightBgSecondaryHover: '#e4e4e7',

      lightStroke: '#d4d4d8',
      lightTooltip: '#27272a',
      lightTextOnTooltip: '#f4f4f5',

      lightTextPrimary: '#27272a',
      lightTextSecondary: '#71717a',
    },

    fonts: {
      inter: 'Inter, sans-serif',
    },

    fontSizes: {
      xs: '0.875rem', // 14px
      sm: '1rem', // 16px
      md: '1.125rem', // 18px
      lg: '1.25rem', // 20px
      xl: '1.5rem', // 24px
      '2xl': '2rem', // 32px
    },

    fontWeights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },

    space: {
      xs: '0.75rem',
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '2.5rem',
    },

    radii: {
      default: '8px',
      lg: '24px',
      xl: '32px',
      circle: '50%',
      full: '9999px',
    },

    shadows: {
      default: '4px 4px 8px rgba(0, 0, 0, 0.25)',
      card: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    },

    transitions: {
      default: 'all 0.3s ease-in-out',
      fast: 'all 0.15s ease-in-out',
      slow: 'all 0.45s ease-in-out',
    },
  },

  media: {
    bp1: '(max-width: 768px)',
    bp2: '(max-width: 576px)',
    bp3: '(max-width: 480px)',
  },
})
