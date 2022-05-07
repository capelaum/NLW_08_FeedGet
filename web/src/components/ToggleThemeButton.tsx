import { Moon, Sun } from 'phosphor-react'
import { useTheme } from '../contexts/ThemeContext'

export function ToggleThemeButton() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
      className="
        absolute top-4 right-4 sm:top-8 sm:right-8
        flex items-center justify-center
        w-10 h-10 rounded-full drop-shadow-md transition-all duration-500
        text-gray-700 bg-gray-100 hover:bg-gray-700 hover:text-gray-400
        dark:bg-zinc-800 dark:text-gray-400 dark:hover:text-gray-700 dark:hover:bg-gray-100
        "
    >
      {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  )
}
