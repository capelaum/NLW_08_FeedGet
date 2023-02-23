/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { keyframes, styled } from '~/styles/stitches.config'

const fadeIn = keyframes({
  '0%': { opacity: 1 },
  '50%': { opacity: 0.7 },
  '100%': { opacity: 1 },
})

const scale = keyframes({
  '0%': { transform: 'scale3d(0.4, 0.4, 1)' },
  '50%': { transform: 'scale3d(2.2, 2.2, 1)' },
  '100%': { transform: 'scale3d(0.4, 0.4, 1)' },
})

export const CircleContainer = styled('div', {
  position: 'absolute',
  top: -20,
  left: 0,
  zIndex: -1,
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
})

export const Circle = styled('div', {
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  mixBlendMode: 'screen',
  backgroundImage: 'radial-gradient($pink 0%, $brand400 10%, $darkBg 56%)',
  animation: `${fadeIn} 200ms infinite, ${scale} 2s infinite`,
})
