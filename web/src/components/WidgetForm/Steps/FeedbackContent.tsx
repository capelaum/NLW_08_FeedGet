import { ArrowLeft } from 'phosphor-react'
import { FormEvent, useState } from 'react'
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

    // await api.post('/feedbacks', {
    //   type: feedbackType,
    //   comment,
    //   screenshot
    // })

    // setIsSendingFeedback(false)
    onFeedbackSent()
  }

  return (
    <>
      <header>
        <button
          type="button"
          onClick={onFeedbackRestart}
          className="
            absolute top-5 left-5
          text-zinc-500 hover:text-zinc-800
          dark:text-zinc-400 dark:hover:text-zinc-100
          "
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
              bg-transparent rounded-md resize-y
            text-zinc-800 dark:text-zinc-100
            placeholder-zinc-500 dark:placeholder-zinc-400
              border border-zinc-300 dark:border-zinc-600

            focus:border-brand-500 focus:outline-none
            focus:ring-brand-500 focus:ring-1

              scrollbar-track-transparent scrollbar-thin
            scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-600
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
              transition-colors
              p-2 rounded-md text-md
              border-transparent flex-1
              flex justify-center items-center
              bg-brand-500 hover:bg-brand-400 text-white
              focus:outline-none focus:ring-brand-500
              focus:ring-2 focus:ring-offset-2
              focus:ring-offset-zinc-300 dark:focus:ring-offset-zinc-900
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
