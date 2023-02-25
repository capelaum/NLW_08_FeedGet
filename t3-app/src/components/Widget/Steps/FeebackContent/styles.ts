import { styled } from '~/styles/stitches.config'

export const WidgetRestartButton = styled('button', {
  all: 'unset',
  borderRadius: '$full',
  height: 25,
  width: 25,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: 16,
  left: 16,
  cursor: 'pointer',

  variants: {
    theme: {
      light: {
        color: '$lightTextSecondary',
        '&:hover': {
          color: '$lightTextPrimary',
        },
      },
      dark: {
        color: '$darkTextSecondary',
        '&:hover': {
          color: '$darkTextPrimary',
        },
      },
    },
  },
})

export const WidgetForm = styled('form', {
  width: '100%',
})

export const WidgetTextarea = styled('textarea', {
  width: '100%',
  minHeight: 120,
  maxHeight: 240,
  fontSize: '$xs',
  fontWeight: '$normal',
  backgroundColor: 'transparent',
  borderRadius: '4px',
  resize: 'vertical',
  padding: '0.5rem 0.75rem',
  fontFamily: 'inherit',
  lineHeight: 1.6,

  '&:focus': {
    outline: '1px solid $brand500',
    border: '1px solid $brand500',
  },

  '&::-webkit-scrollbar': {
    width: 6,
  },

  '&::-webkit-scrollbar-track': {
    backgroundColor: 'transparent',
  },

  '&::-webkit-scrollbar-thumb': {
    borderRadius: '$full',
  },

  variants: {
    theme: {
      light: {
        color: '$lightTextPrimary',
        border: '1px solid $lightStroke',

        '&:placeholder': {
          color: '$lightTextSecondary',
        },

        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '$lightBgSecondaryHover',
        },
      },
      dark: {
        color: '$darkTextPrimary',
        border: '1px solid $darkStroke',

        '&:placeholder': {
          color: '$darkTextSecondary',
        },

        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '$darkBgSecondaryHover',
        },
      },
    },
  },
})

export const WidgetButtonsWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  marginTop: '1rem',
})

export const WidgetSubmitButton = styled('button', {
  all: 'unset',
  padding: '0.75rem',
  borderRadius: '4px',
  backgroundColor: '$brand500',
  fontFamily: 'inherit',
  color: '$white',
  flex: 1,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  transition: '$fast',

  '&:hover': {
    backgroundColor: '$brand400',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',

    '&:hover': {
      backgroundColor: '$brand500',
    },
  },

  '&:focus': {
    outline: '1px solid $brand500',
    outlineOffset: 2,
  },
})
