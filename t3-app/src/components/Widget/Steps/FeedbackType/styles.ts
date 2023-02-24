import { styled } from '~/styles/stitches.config'

export const FeedbackTypeButtonsWrapper = styled('div', {
  display: 'flex',
  gap: '0.5rem',
})

export const FeedbackTypeButton = styled('button', {
  all: 'unset',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '$default',
  padding: '1.25rem 0',
  width: '96px',
  gap: '1rem',
  cursor: 'pointer',
  border: '2px solid transparent',

  h2: {
    fontSize: '$xs',
    fontWeight: '$medium',
  },

  '&:hover': {
    border: '2px solid $brand500',
  },

  '&:focus': {
    border: '2px solid $brand500',
  },

  variants: {
    theme: {
      light: {
        color: '$lightTextPrimary',
        backgroundColor: '$lightBgSecondary',
      },
      dark: {
        color: '$darkTextPrimary',
        backgroundColor: '$darkBgSecondary',
      },
    },
  },
})
