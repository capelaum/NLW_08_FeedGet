import { CircleNotch } from 'phosphor-react'
import { useTheme } from '~/contexts/ThemeContext'
import { LoadingWrapper } from './styles'

export function Loading() {
  const { theme } = useTheme()

  return (
    <LoadingWrapper theme={theme}>
      <CircleNotch size={18} weight="bold" />
    </LoadingWrapper>
  )
}
