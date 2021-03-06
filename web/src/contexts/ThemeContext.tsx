import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

interface ThemeProviderProps {
  children: ReactNode
}

interface ThemeContextData {
  theme: string
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme) {
      setTheme(savedTheme)
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
    localStorage.setItem('theme', newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextData => useContext(ThemeContext)
