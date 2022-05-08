import { feedbackTypes } from '../../../utils/feedbackTypes'
import { CloseButton } from '../../CloseButton'

export type FeedbackType = keyof typeof feedbackTypes

interface FeedbackTypeProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void
}

export function FeedbackType({ onFeedbackTypeChanged }: FeedbackTypeProps) {
  return (
    <>
      <header>
        <h1 className="text-xl leading-4">Deixe seu feedback</h1>

        <CloseButton />
      </header>

      <div className="py-8 flex gap-2 w-full">
        {Object.entries(feedbackTypes).map(([type, { title, image }]) => (
          <button
            key={type}
            type="button"
            title={title}
            onClick={() => onFeedbackTypeChanged(type as FeedbackType)}
            className="
            bg-zinc-100 dark:bg-zinc-800 rounded-lg
              py-5 w-24 flex-1
              flex flex-col items-center gap-2
              border-2 border-transparent hover:border-brand-500
              focus:border-brand-500 focus:outline-none
            "
          >
            <img src={image.source} alt={image.alt} />
            <h2 className=" dark:text-zinc-400">{title}</h2>
          </button>
        ))}
      </div>
    </>
  )
}
