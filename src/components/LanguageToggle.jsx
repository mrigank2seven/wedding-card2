import { useLanguage } from '../lib/useLanguage'

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      className="fixed right-6 top-6 z-100 rounded-full border border-gold/50 bg-accent-deep/90 px-5 py-2.5 text-sm font-medium text-page backdrop-blur transition-all hover:border-gold hover:bg-accent-deep hover:scale-105 active:scale-95 md:right-4 md:top-4"
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === 'en' ? 'Hindi' : 'English'}`}
    >
      {language === 'en' ? 'हिंदी' : 'English'}
    </button>
  )
}
