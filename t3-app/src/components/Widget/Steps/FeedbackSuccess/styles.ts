import { styled } from '~/styles/stitches.config'

export const WidgetSucessWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1.25rem 0',

  span: {
    fontSize: '$lg',
    fontWeight: '$medium',
    marginTop: '1rem',
  },
})

export const WidgetRestartButton = styled('button', {
  all: 'unset',
  padding: '0.75rem 1rem',
  marginTop: '1.5rem',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '$sm',

  transition: '$fast',

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
