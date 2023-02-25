import { CircleNotch } from 'phosphor-react'
import { LoadingWrapper } from './styles'

export function Loading() {
  return (
    <LoadingWrapper>
      <CircleNotch size={18} weight="bold" />
    </LoadingWrapper>
  )
}
