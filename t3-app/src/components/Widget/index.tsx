import { Portal, Root } from '@radix-ui/react-popover'
import Image from 'next/image'
import Link from 'next/link'
import { ChatTeardropDots, X } from 'phosphor-react'
import { useState } from 'react'
import { useTheme } from '~/contexts/ThemeContext'
import { feedbackTypes } from './data/feedbackTypes'
import {
  FeedbackTypeButton,
  FeedbackTypeButtonsWrapper,
  WidgetCloseButton,
  WidgetContent,
  WidgetFooter,
  WidgetTriggerButton,
} from './styles'

export type FeedbackType = keyof typeof feedbackTypes

export function Widget() {
  const { theme } = useTheme()
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  return (
    <Root>
      <WidgetTriggerButton aria-label="Criar Feedback" title="Criar Feedback">
        <ChatTeardropDots size={25} weight="regular" />
        <span>Feedback</span>
      </WidgetTriggerButton>

      <Portal>
        <WidgetContent sideOffset={16} data-side="top" theme={theme}>
          <WidgetCloseButton theme={theme} aria-label="Close">
            <X size={16} weight="bold" />
          </WidgetCloseButton>

          <h1>Deixe seu Feedback</h1>

          <FeedbackTypeButtonsWrapper>
            {Object.entries(feedbackTypes).map(([type, { title, image }]) => (
              <FeedbackTypeButton
                theme={theme}
                key={type}
                type="button"
                title={title}
                onClick={() => setFeedbackType(type as FeedbackType)}
              >
                <Image src={image.source} alt={image.alt} />
                <h2 className=" dark:text-zinc-400">{title}</h2>
              </FeedbackTypeButton>
            ))}
          </FeedbackTypeButtonsWrapper>

          <WidgetFooter theme={theme}>
            Feito com 💜 por{' '}
            <Link
              href="https://github.com/capelaum"
              target="_blank"
              rel="noreferrer noopener"
            >
              capelaum
            </Link>
          </WidgetFooter>
        </WidgetContent>
      </Portal>
    </Root>
  )
}
