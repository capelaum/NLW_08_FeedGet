import { Moon, Sun } from 'phosphor-react'
import { useTheme } from '../contexts/ThemeContext'

export function ToggleThemeButton() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
      className="
        absolute top-4 right-4 sm:top-8 sm:right-8
        flex items-center justify-center z-10
        w-10 h-10 rounded-full drop-shadow-md transition-all duration-300
        bg-white hover:text-zinc-50 hover:bg-zinc-900
        dark:bg-zinc-800 dark:hover:text-zinc-900 dark:hover:bg-zinc-50
        "
    >
      {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  )
}
