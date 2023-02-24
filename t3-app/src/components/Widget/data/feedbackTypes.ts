import { type StaticImageData } from 'next/image'
import bugImageUrl from '~/assets/images/bug.svg'
import ideaImageUrl from '~/assets/images/idea.svg'
import thoughtImageUrl from '~/assets/images/thought.svg'

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl as StaticImageData,
      alt: 'Imagem de um inseto.',
    },
    text: 'Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo...',
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl as StaticImageData,
      alt: 'Imagem de uma lâmpada.',
    },
    text: 'Teve uma ideia de melhoria ou de nova funcionalidade? Conta pra gente!',
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl as StaticImageData,
      alt: 'Imagem de um balão de pensamento.',
    },
    text: 'Queremos te ouvir. O que você gostaria de nos dizer?',
  },
}
