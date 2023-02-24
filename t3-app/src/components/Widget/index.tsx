import { Portal, Root } from '@radix-ui/react-popover'
import Link from 'next/link'
import { ChatTeardropDots, X } from 'phosphor-react'
import { useState } from 'react'
import { useTheme } from '~/contexts/ThemeContext'
import { FeedbackType } from './Steps/FeedbackType'
import {
  WidgetCloseButton,
  WidgetContent,
  WidgetFooter,
  WidgetTriggerButton,
} from './styles'

export function Widget() {
  const { theme } = useTheme()
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  return (
    <Root>
      <WidgetTriggerButton aria-label="Criar Feedback" title="Criar Feedback">
        <ChatTeardropDots size={25} weight="regular" />
        <span>
          <span></span>
          Feedback
        </span>
      </WidgetTriggerButton>

      <Portal>
        <WidgetContent sideOffset={16} data-side="top" theme={theme}>
          <WidgetCloseButton theme={theme} aria-label="Close">
            <X size={16} weight="bold" />
          </WidgetCloseButton>

          <FeedbackType setFeedbackType={setFeedbackType} />

          <WidgetFooter theme={theme}>
            Feito com 💜 por{' '}
            <Link
              href="https://github.com/capelaum"
              target="_blank"
              rel="noreferrer noopener"
            >
              Luís V. Capelletto
            </Link>
          </WidgetFooter>
        </WidgetContent>
      </Portal>
    </Root>
  )
}
