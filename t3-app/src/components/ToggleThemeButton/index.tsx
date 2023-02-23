import { MoonStars, Sun } from 'phosphor-react'
import { useTheme } from '~/contexts/ThemeContext'
import { ToggleThemeButtonStyled } from './styles'

export function ToggleThemeButton() {
  const { theme, toggleTheme } = useTheme()

  return (
    <ToggleThemeButtonStyled
      theme={theme}
      type="button"
      onClick={toggleTheme}
      title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
    >
      {theme === 'dark' ? (
        <Sun size={24} weight="regular" />
      ) : (
        <MoonStars size={24} weight="regular" />
      )}
    </ToggleThemeButtonStyled>
  )
}
