import { ArrowLeft } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import { api } from '../../../services/api'
import { CloseButton } from '../../CloseButton'
import { Loading } from '../../Loading'
import { ScreenshotButton } from '../ScreenshotButton'
import { FeedbackType, feedbackTypes } from './FeedbackType'

interface FeedbackContentProps {
  feedbackType: FeedbackType
  onFeedbackRestart: () => void
  onFeedbackSent: () => void
}

export function FeedbackContent({
  feedbackType,
  onFeedbackRestart,
  onFeedbackSent
}: FeedbackContentProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState('')
  const [isSendingFeedback, setIsSendingFeedback] = useState(false)

  const { title, image, text } = feedbackTypes[feedbackType]

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault()
    setIsSendingFeedback(true)

    await api.post('/feedbacks', {
      type: feedbackType,
      comment,
      screenshot
    })

    setIsSendingFeedback(false)
    onFeedbackSent()
  }

  return (
    <>
      <header>
        <button
          type="button"
          onClick={onFeedbackRestart}
          className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <h1 className="text-xl leading-4 flex items-center gap-2 justify-center ">
          <img src={image.source} alt={image.alt} className="w-5 h-5" />
          {title}
        </h1>

        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          placeholder={text}
          onChange={e => setComment(e.target.value)}
          className="
              w-full min-h-[120px] tex-sm
            placeholder-zinc-400 text-zinc-100 border border-zinc-600
              bg-transparent rounded-md resize-y
            focus:border-brand-500 focus:outline-none
            focus:ring-brand-500 focus:ring-1
            scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent
            "
        />

        <footer className="flex gap-2 mt-4">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />

          <button
            type="submit"
            disabled={comment.trim().length === 0 || isSendingFeedback}
            className="
              p-2 bg-brand-500 rounded-md
              transition-colors duration-200
              border-transparent flex-1
              flex justify-center items-center text-md
              hover:bg-brand-400
              focus:outline-none focus:ring-brand-500
              focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900
              disabled:opacity-50 disabled:hover:bg-brand-500
            "
          >
            {isSendingFeedback ? <Loading /> : 'Enviar feedback'}
          </button>
        </footer>
      </form>
    </>
  )
}
