import bugImageUrl from '../../../assets/bug.svg'
import ideaImageUrl from '../../../assets/idea.svg'
import thoughtImageUrl from '../../../assets/thought.svg'
import { CloseButton } from '../../CloseButton'

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    },
    text: 'Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo...'
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada'
    },
    text: 'Teve uma ideia de melhoria ou de nova funcionalidade? Conta pra gente!'
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento'
    },
    text: 'Queremos te ouvir. O que você gostaria de nos dizer? '
  }
}

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
