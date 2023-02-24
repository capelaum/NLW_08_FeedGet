/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { keyframes, styled } from '~/styles/stitches.config'

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const LoadingWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  width: 24,
  height: 24,

  svg: {
    animation: `${spin} 0.7s linear infinite`,
  },

  variants: {
    theme: {
      light: {
        color: '$lightTextPrimary',
      },

      dark: {
        color: '$darkTextPrimary',
      },
    },
  },
})
