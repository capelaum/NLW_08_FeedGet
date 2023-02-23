/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { styled } from './stitches.config'

export const HomeWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw',
  padding: '0 1.5rem',
  overflow: 'hidden',

  'h1, h2': {
    textAlign: 'center',
  },

  h1: {
    fontSize: '88px',
    fontWeight: '$extrabold',
    background: 'linear-gradient(to right, $brand500 0%, $pink 100%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    marginBottom: '2rem',
  },

  h2: {
    fontSize: '24px',
    fontWeight: 500,
  },

  '@bp1': {
    h1: {
      fontSize: '64px',
    },

    h2: {
      fontSize: '1.25rem',
    },
  },

  '@bp2': {
    h1: {
      fontSize: '48px',
    },

    h2: {
      fontSize: '1.125rem',
    },
  },

  '@bp3': {
    h1: {
      fontSize: '32px',
    },

    h2: {
      fontSize: '1rem',
    },
  },
})

export const WaveWrapper = styled('div', {
  position: 'absolute',
  zIndex: 1,

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },

  variants: {
    position: {
      'top-right': {
        top: 0,
        right: 0,
      },
      'bottom-left': {
        bottom: 0,
        left: 0,
      },
    },
  },

  '@bp1': {
    maxWidth: 'min(50%, 350px)',
  },

  '@bp2': {
    maxWidth: 'min(50%, 300px)',
  },

  '@bp3': {
    maxWidth: 'min(50%, 250px)',
  },
})
