import { ToggleThemeButton } from '../components/ToggleThemeButton'
import { Waves } from '../components/Waves'
import { Widget } from '../components/Widget'
import { useTheme } from '../contexts/ThemeContext'

export function Home() {
  const { theme } = useTheme()

  return (
    <div className={`${theme} flex h-screen w-screen`}>
      <main
        className="
          w-full h-full
        bg-zinc-100 text-zinc-800
        dark:bg-[#09090A] dark:text-zinc-100
          flex flex-col flex-grow items-center justify-center px-5
          "
      >
        <Widget />
        <ToggleThemeButton />

        <h1
          className="
            text-4xl sm:text-6xl lg:text-8xl text-center py-2 z-10
            font-extrabold text-transparent bg-clip-text bg-gradient-to-r
          from-brand-400 to-pink-500
          "
        >
          Feedback Widget
        </h1>
        <p className="py-4 text-center text-md sm:text-xl lg:text-2xl z-10">
          Um widget de feedbacks perfeito para seu website!
        </p>

        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-5 py-3 border border-transparent
                inline-flex items-center justify-center transition-all
                text-base font-medium rounded-lg
                text-white bg-brand-600 hover:bg-brand-500
              "
            >
              View Demo
            </a>
          </div>
        </div>

        <Waves />
      </main>
    </div>
  )
}
