import { useEffect, useState } from 'react'
import { LanguageContext } from './LanguageContext'

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem('language') || 'en'
    } catch {
      return 'en'
    }
  })

  useEffect(() => {
    document.documentElement.lang = language === 'hi' ? 'hi' : 'en'
  }, [language])

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'hi' : 'en'
    setLanguage(newLang)
    try {
      localStorage.setItem('language', newLang)
    } catch {
      console.warn('Failed to save language preference to localStorage')
    }
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
