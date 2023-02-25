import Image from 'next/image'
import { ArrowLeft } from 'phosphor-react'
import { useState, type FormEvent } from 'react'
import { toast } from 'react-toastify'
import { useTheme } from '~/contexts/ThemeContext'
import { api } from '~/utils/api'
import { feedbackTypes } from '../../data/feedbackTypes'
import { Loading } from '../../Loading'
import { ScreenshotButton } from '../../ScreenshotButton'
import { type FeedbackType } from '../FeedbackType'
import {
  WidgetButtonsWrapper,
  WidgetForm,
  WidgetRestartButton,
  WidgetSubmitButton,
  WidgetTextarea,
} from './styles'

interface FeedbackContentProps {
  feedbackType: FeedbackType
  handleRestartFeedback: () => void
  setFeedbackSent: (isFeedbackSent: boolean) => void
}

export function FeedbackContent({
  feedbackType,
  handleRestartFeedback,
  setFeedbackSent,
}: FeedbackContentProps) {
  const [isSendingFeedback, setIsSendingFeedback] = useState(false)
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState('')

  const { theme } = useTheme()

  const { title, image, text } = feedbackTypes[feedbackType]

  const { mutateAsync: createFeedbackMutation } =
    api.feedback.create.useMutation({
      onSuccess: () => {
        setFeedbackSent(true)
      },
    })

  async function handleSubmitFeedback(event: FormEvent): Promise<void> {
    event.preventDefault()

    if (comment.trim().length < 3) {
      toast.error('O comentário deve ter no mínimo 3 caracteres')
      return
    }

    if (comment.trim().length > 255) {
      toast.error('O comentário deve ter no máximo 255 caracteres')
    }

    setIsSendingFeedback(true)

    try {
      await createFeedbackMutation({
        type: feedbackType,
        comment: comment.trim(),
        screenshot: screenshot ?? undefined,
      })
    } catch (error) {
      console.error(error)
      toast.error(
        'Ocorreu um erro ao enviar o feedback. Por favor, tente novamente 😕'
      )
    }

    setIsSendingFeedback(false)
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

      <WidgetForm onSubmit={(e) => void handleSubmitFeedback(e)}>
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

          <WidgetSubmitButton
            type="submit"
            disabled={comment.trim().length === 0 || isSendingFeedback}
          >
            {isSendingFeedback ? <Loading /> : 'Enviar feedback'}
          </WidgetSubmitButton>
        </WidgetButtonsWrapper>
      </WidgetForm>
    </>
  )
}
