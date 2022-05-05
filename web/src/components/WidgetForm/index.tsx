import { useState } from 'react'
import { FeedbackContent } from './Steps/FeedbackContent'
import { FeedbackSuccess } from './Steps/FeedbackSuccess'
import { FeedbackType } from './Steps/FeedbackType'

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  function handleRestartFeedback() {
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  function handleSendFeedback() {
    setFeedbackSent(true)
  }

  function renderContent() {
    if (feedbackSent) {
      return <FeedbackSuccess onFeedbackRestart={handleRestartFeedback} />
    }

    if (feedbackType) {
      return (
        <FeedbackContent
          feedbackType={feedbackType}
          onFeedbackRestart={handleRestartFeedback}
          onFeedbackSent={handleSendFeedback}
        />
      )
    }

    return <FeedbackType onFeedbackTypeChanged={setFeedbackType} />
  }

  return (
    <div
      className="
        min-w-auto sm:min-w-[340px] bg-zinc-900 p-4
        relative rounded-2xl mb-4
        flex flex-col items-center
        shadow-lg
        w-[calc(100vw-2rem)]
        sm:w-auto
      "
    >
      {renderContent()}

      <footer className="text-xs text-neutral-400">
        Feito com 💜 por{' '}
        <a
          className="underline underline-offset-2"
          href="https://github.com/capelaum"
          target="_blank"
          rel="noreferrer"
        >
          capelaum
        </a>
      </footer>
    </div>
  )
}
