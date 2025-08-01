'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Menu, X, Globe } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { locales } from '@/lib/i18n';

export default function Navigation() {
  const t = useTranslations('nav');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  
  const currentLocale = pathname.split('/')[1] || 'zh';

  const navItems = [
    { href: '#home', label: t('home') },
    { href: '#about', label: t('about') },
    { href: '#origin', label: t('origin') },
    { href: '#concept', label: t('concept') },
    { href: '#status', label: t('status') },
    { href: '#future', label: t('future') }
  ];

  const handleLanguageChange = (locale: string) => {
    const newPathname = pathname.replace(/^\/[^\/]+/, `/${locale}`);
    router.push(newPathname);
    setIsLangOpen(false);
  };

  const languageLabels = {
    zh: '中文',
    en: 'English',
    es: 'Español'
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">SLC</span>
            </div>
            <span className="font-bold text-xl hidden sm:block">Shanghai Victory Light</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-blue-900 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-900 transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span>{languageLabels[currentLocale as keyof typeof languageLabels]}</span>
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2">
                  {locales.map((locale) => (
                    <button
                      key={locale}
                      onClick={() => handleLanguageChange(locale)}
                      className={`block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
                        currentLocale === locale ? 'bg-gray-50 text-blue-900' : 'text-gray-700'
                      }`}
                    >
                      {languageLabels[locale]}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t">
            <div className="py-4 px-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-gray-600 hover:text-blue-900 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="border-t pt-3">
                <p className="text-sm text-gray-500 mb-2">Language / 语言 / Idioma</p>
                <div className="space-y-2">
                  {locales.map((locale) => (
                    <button
                      key={locale}
                      onClick={() => {
                        handleLanguageChange(locale);
                        setIsMenuOpen(false);
                      }}
                      className={`block w-full text-left py-2 px-3 rounded-md transition-colors ${
                        currentLocale === locale
                          ? 'bg-blue-50 text-blue-900'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {languageLabels[locale]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}