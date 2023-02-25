import * as Popover from '@radix-ui/react-popover'
import { keyframes, styled } from '~/styles/stitches.config'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

export const WidgetContent = styled(Popover.Content, {
  borderRadius: '$md',
  padding: '1rem',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',

  zIndex: 3,
  marginRight: '1.25rem',
  minWidth: 340,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.5rem',

  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },

  h1: {
    fontSize: '$md',
    fontWeight: '$medium',
    display: 'flex',
    alignItems: 'center',

    img: {
      width: 24,
      height: 24,
      marginRight: '0.5rem',
    },
  },

  boxShadow: '$default',

  variants: {
    theme: {
      light: {
        backgroundColor: '$lightBgPrimary',
        color: '$lightTextPrimary',
      },

      dark: {
        backgroundColor: '$darkBgPrimary',
        color: '$darkTextPrimary',
      },
    },
  },

  '&:focus': {
    outline: '1px solid $brand500',
  },

  '@bp3': {
    minWidth: 280,
  },
})

export const WidgetCloseButton = styled(Popover.Close, {
  all: 'unset',
  borderRadius: '$full',
  height: 25,
  width: 25,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: 16,
  right: 16,
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

export const WidgetTriggerButton = styled(Popover.Trigger, {
  position: 'absolute',
  bottom: '1.25rem',
  right: '1.25rem',
  zIndex: 3,
  cursor: 'pointer',

  padding: '0.75rem',
  fontSize: '$md',

  fontFamily: 'inherit',
  borderRadius: '$full',

  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',

  boxShadow: '$default',

  backgroundColor: '$brand500',
  color: '$white',

  svg: {
    minWidth: '24px',
  },

  span: {
    fontWeight: '$normal',
    maxWidth: 0,
    overflow: 'hidden',
    transition: 'all 0.2s linear',

    '& > span': {
      paddingLeft: '0.5rem',
    },
  },

  '&:hover': {
    span: {
      maxWidth: '100%',
    },
  },

  '&[data-state="open"]': {
    span: {
      maxWidth: '100%',
    },
  },
})

export const WidgetFooter = styled('footer', {
  fontSize: '12px',
  fontWeight: '$normal',
  gap: '0.5rem',

  a: {
    unset: 'all',
    textDecoration: 'none',
    transition: '$default',

    '&:hover': {
      color: '$brand400',
    },
  },

  variants: {
    theme: {
      light: {
        color: '$lightTextSecondary',

        a: {
          color: '$lightTextSecondary',
        },
      },
      dark: {
        color: '$darkTextSecondary',

        a: {
          color: '$darkTextSecondary',
        },
      },
    },
  },
})
