import { CircleWavyCheck } from 'phosphor-react'
import { useTheme } from '~/contexts/ThemeContext'
import { WidgetRestartButton, WidgetSucessWrapper } from './styles'

interface FeedbackSuccessProps {
  onFeedbackRestart: () => void
}

export function FeedbackSuccess({ onFeedbackRestart }: FeedbackSuccessProps) {
  const { theme } = useTheme()

  return (
    <>
      <WidgetSucessWrapper className="flex flex-col items-center py-10 ">
        <CircleWavyCheck size={40} weight="fill" color="#77b255" />

        <span className="text-xl mt-2 text-center ">
          Agradecemos o feedback!
        </span>

        <WidgetRestartButton
          theme={theme}
          onClick={onFeedbackRestart}
          className="
            py-2 px-6 mt-6 text-sm transition-colors
            leading-6 rounded-md border-transparent
          bg-zinc-100 hover:bg-zinc-200
          dark:bg-zinc-800 dark:hover:bg-zinc-700

            focus:outline-none focus:ring-brand-500
            focus:ring-2 focus:ring-offset-2
            focus:ring-offset-zinc-300 dark:focus:ring-offset-zinc-900
          "
        >
          Quero enviar outro
        </WidgetRestartButton>
      </WidgetSucessWrapper>
    </>
  )
}
