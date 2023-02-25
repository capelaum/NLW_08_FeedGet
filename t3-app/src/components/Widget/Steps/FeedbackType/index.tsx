import Image from 'next/image'
import { useTheme } from '~/contexts/ThemeContext'
import { feedbackTypes } from '../../data/feedbackTypes'
import { FeedbackTypeButton, FeedbackTypeButtonsWrapper } from './styles'

export type FeedbackType = keyof typeof feedbackTypes

interface FeedbackTypeProps {
  setFeedbackType: (type: FeedbackType) => void
}

export function FeedbackType({ setFeedbackType }: FeedbackTypeProps) {
  const { theme } = useTheme()

  return (
    <>
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
    </>
  )
}
