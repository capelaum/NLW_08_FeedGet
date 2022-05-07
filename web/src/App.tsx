import { ToggleThemeButton } from './components/ToggleThemeButton'
import { Widget } from './components/Widget'
import { useTheme } from './contexts/ThemeContext'

export function App() {
  const { theme } = useTheme()

  return (
    <div className={`${theme} flex h-screen w-screen`}>
      <main>
        <Widget />
        <ToggleThemeButton />
      </main>
    </div>
  )
}
