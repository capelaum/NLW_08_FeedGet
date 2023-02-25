import html2canvas from 'html2canvas'
import { Camera, Trash } from 'phosphor-react'
import { useState } from 'react'
import { useTheme } from '~/contexts/ThemeContext'
import { Loading } from '../Loading'
import { RemoveScreenshotButton, TakeScreenshotButton } from './styles'

interface ScreenshotButtonProps {
  screenshot: string | null
  setScreenshot: (screenshot: string | null) => void
}

export function ScreenshotButton({
  screenshot,
  setScreenshot,
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  const { theme } = useTheme()

  async function handleTakeScreenshot(): Promise<void> {
    setIsTakingScreenshot(true)

    const canvas = await html2canvas(
      document.getElementById('__next') as HTMLElement
    )

    const base64image = canvas.toDataURL('image/png', 1.0)

    setScreenshot(base64image)

    setIsTakingScreenshot(false)
  }

  if (screenshot) {
    return (
      <RemoveScreenshotButton
        theme={theme}
        type="button"
        title="Remover screenshot"
        onClick={() => setScreenshot(null)}
        css={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <Trash weight="fill" />
      </RemoveScreenshotButton>
    )
  }

  return (
    <TakeScreenshotButton
      type="button"
      title="Capturar tela"
      theme={theme}
      onClick={handleTakeScreenshot as () => void}
    >
      {isTakingScreenshot ? <Loading /> : <Camera size={18} />}
    </TakeScreenshotButton>
  )
}
