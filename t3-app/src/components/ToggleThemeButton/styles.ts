import { styled } from '~/styles/stitches.config'

export const ToggleThemeButtonStyled = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '48px',
  height: '48px',
  borderRadius: '$circle',

  zIndex: 3,

  border: 'none',
  outline: 'none',
  cursor: 'pointer',

  position: 'absolute',
  top: '1.25rem',
  right: '1.25rem',

  boxShadow: '$default',

  variants: {
    theme: {
      light: {
        backgroundColor: '$lightBgPrimary',
        color: '$lightTextPrimary',

        '&:hover': {
          backgroundColor: '$lightBgSecondaryHover',
        },
      },
      dark: {
        backgroundColor: '$darkBgPrimary',
        color: '$darkTextPrimary',

        '&:hover': {
          backgroundColor: '$darkBgSecondaryHover',
        },
      },
    },
  },
})
