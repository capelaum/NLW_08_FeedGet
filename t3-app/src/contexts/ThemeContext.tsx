import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

interface ThemeProviderProps {
  children: ReactNode
}

type ThemeType = 'light' | 'dark'

interface ThemeContextData {
  theme: ThemeType
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeType>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('@feedget-theme')

    if (savedTheme) {
      setTheme(savedTheme as ThemeType)
    }

    if (!savedTheme) {
      window?.matchMedia('(prefers-color-scheme: dark)').matches
        ? setTheme('dark')
        : setTheme('light')
    }
  }, [])

  function toggleTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark'

    setTheme(newTheme)
    localStorage.setItem('@feedget-theme', newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextData => useContext(ThemeContext)
