import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  html: {
    scrollBehavior: 'smooth',
  },

  body: {
    backgroundColor: '$darkBg',
    color: '$white',
    overflow: 'hidden',
    fontFamily: '$inter',
    '-webkit-font-smoothing': 'antialised',
  },

  'a, button': {
    cursor: 'pointer',
    border: 'none',

    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.7,
    },
  },
})
