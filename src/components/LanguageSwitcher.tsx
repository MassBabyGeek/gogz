"use client";

/**
 * Language Switcher - Sélecteur de langue
 * Permet de basculer entre FR, EN, ES
 */

import { usePathname, useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Globe } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

const languages = [
  { code: 'fr', flag: '🇫🇷' },
  { code: 'en', flag: '🇬🇧' },
  { code: 'es', flag: '🇪🇸' }
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('languageSwitcher');
  const tLang = useTranslations('languages');

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  // Fermer le dropdown en cliquant à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (newLocale: string) => {
    // Extraire le path sans la locale
    const segments = pathname.split('/');
    const pathWithoutLocale = segments.slice(2).join('/') || '';

    // Rediriger vers la nouvelle locale
    router.push(`/${newLocale}/${pathWithoutLocale}`);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-white/10 transition-all duration-300 group"
        aria-label={t('changeLanguageLabel')}
        aria-expanded={isOpen}
      >
        <Globe size={20} className="text-primary-light group-hover:text-primary transition-colors" />
        <span className="hidden sm:inline text-sm font-medium text-foreground">
          {currentLanguage.flag} {currentLanguage.code.toUpperCase()}
        </span>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 glass-strong rounded-xl shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200",
                "hover:bg-primary/10 hover:text-primary-light",
                locale === language.code
                  ? "bg-primary/20 text-primary-light font-semibold"
                  : "text-foreground-secondary"
              )}
            >
              <span className="text-2xl">{language.flag}</span>
              <span className="text-sm">{tLang(language.code as 'fr' | 'en' | 'es')}</span>
              {locale === language.code && (
                <span className="ml-auto text-primary-light">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
