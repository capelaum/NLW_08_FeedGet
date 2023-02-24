import Image from 'next/image'
import { ArrowLeft } from 'phosphor-react'
import { useState, type FormEvent } from 'react'
import { useTheme } from '~/contexts/ThemeContext'
import { feedbackTypes } from '../../data/feedbackTypes'
import { Loading } from '../../Loading'
import { ScreenshotButton } from '../../ScreenshotButton'
import { type FeedbackType } from '../FeedbackType'
import {
  SubmitButton,
  WidgetButtonsWrapper,
  WidgetForm,
  WidgetRestartButton,
  WidgetTextarea,
} from './styles'

interface FeedbackContentProps {
  feedbackType: FeedbackType
  handleRestartFeedback: () => void
  handleSendFeedback: () => void
}

export function FeedbackContent({
  feedbackType,
  handleRestartFeedback,
  handleSendFeedback,
}: FeedbackContentProps) {
  const [isSendingFeedback, setIsSendingFeedback] = useState(false)
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState('')

  const { theme } = useTheme()

  const { title, image, text } = feedbackTypes[feedbackType]

  function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault()
    setIsSendingFeedback(true)

    console.log('Feedback Enviado:', {
      type: feedbackType,
      comment,
      screenshot,
    })

    setIsSendingFeedback(false)
    handleSendFeedback()
  }

  return (
    <>
      <h1 className="text-xl leading-4 flex items-center gap-2 justify-center ">
        <Image src={image.source} alt={image.alt} />
        {title}
      </h1>

      <WidgetRestartButton
        type="button"
        onClick={handleRestartFeedback}
        theme={theme}
      >
        <ArrowLeft size={16} weight="bold" />
      </WidgetRestartButton>

      <WidgetForm onSubmit={handleSubmitFeedback}>
        <WidgetTextarea
          theme={theme}
          placeholder={text}
          onChange={(e) => setComment(e.target.value)}
        />

        <WidgetButtonsWrapper className="flex gap-2 mt-4">
          <ScreenshotButton
            screenshot={screenshot}
            setScreenshot={setScreenshot}
          />

          <SubmitButton
            type="submit"
            disabled={comment.trim().length === 0 || isSendingFeedback}
          >
            {isSendingFeedback ? <Loading /> : 'Enviar feedback'}
          </SubmitButton>
        </WidgetButtonsWrapper>
      </WidgetForm>
    </>
  )
}
