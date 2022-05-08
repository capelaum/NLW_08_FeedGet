import html2canvas from 'html2canvas'
import { Camera, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Loading } from '../Loading'

interface ScreenshotButtonProps {
  screenshot: string | null
  onScreenshotTook: (screenshot: string | null) => void
}

export function ScreenshotButton({
  screenshot,
  onScreenshotTook
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true)

    const canvas = await html2canvas(document.querySelector('#root')!)
    const base64image = canvas.toDataURL('image/png', 1.0)

    onScreenshotTook(base64image)

    setIsTakingScreenshot(false)
  }

  if (screenshot) {
    return (
      <button
        type="button"
        title="Remover screenshot"
        onClick={() => onScreenshotTook(null)}
        className="
          p-1 w-10 h-10 rounded-md border-transparent
          flex justify-end items-end transition-colors
          text-zinc-500 dark:text-zinc-400
          hover:text-zinc-800 hover:dark:text-zinc-100
        "
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <Trash weight="fill" />
      </button>
    )
  }

  return (
    <button
      type="button"
      title="Capturar tela"
      onClick={handleTakeScreenshot}
      className="
        p-2 bg-zinc-100 dark:bg-zinc-800 rounded-md
        border-transparent hover:bg-zinc-200 dark:hover:bg-zinc-700
        transition-colors duration-200
        focus:outline-none focus:ring-brand-500
        focus:ring-2 focus:ring-offset-2
        focus:ring-offset-zinc-300 dark:focus:ring-offset-zinc-900
      "
    >
      {isTakingScreenshot ? (
        <Loading />
      ) : (
        <Camera className="w-6 h-6 tex-zinc-800 dark:tex-zinc-100" />
      )}
    </button>
  )
}
