import { styled } from '~/styles/stitches.config'

export const TakeScreenshotButton = styled('button', {
  all: 'unset',
  width: 44,
  height: 44,
  borderRadius: '4px',
  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  transition: '$fast',

  '&:focus': {
    outline: '1px solid $brand500',
    outlineOffset: 2,
  },

  variants: {
    theme: {
      light: {
        color: '$lightTextPrimary',
        backgroundColor: '$lightBgSecondary',

        '&:hover': {
          backgroundColor: '$lightBgSecondaryHover',
        },
      },

      dark: {
        color: '$darkTextPrimary',
        backgroundColor: '$darkBgSecondary',

        '&:hover': {
          backgroundColor: '$darkBgSecondaryHover',
        },
      },
    },
  },
})

export const RemoveScreenshotButton = styled('button', {
  all: 'unset',
  borderRadius: '4px',
  cursor: 'pointer',
  width: 44,
  height: 44,
  overflow: 'hidden',
  position: 'relative',

  svg: {
    position: 'absolute',
    bottom: 2,
    right: 2,
  },

  transition: '$fast',

  '&:focus': {
    outline: '1px solid $brand500',
    outlineOffset: 2,
  },

  variants: {
    theme: {
      light: {
        color: '$lightTextPrimary',

        '&:hover': {
          color: '$lightTextSecondary',
        },
      },

      dark: {
        color: '$darkTextPrimary',

        '&:hover': {
          color: '$darkTextSecondary',
        },
      },
    },
  },
})
