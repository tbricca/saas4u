'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { builder } from '@builder.io/react';
import { usePathname, useRouter } from 'next/navigation';

type LocaleContextType = {
  locale: string;
  setLocale: (locale: string) => void;
};

const LocaleContext = createContext<LocaleContextType>({
  locale: 'en-US',
  setLocale: () => {},
});

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState('en-US');
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Extract locale from URL path
    const pathSegments = pathname.split('/');
    const pathLocale = pathSegments[1];
    
    // Check if the path segment is a valid locale
    const validLocales = ['en-US', 'es-ES', 'fr-FR'];
    if (validLocales.includes(pathLocale)) {
      setLocaleState(pathLocale);
      document.cookie = `NEXT_LOCALE=${pathLocale}; path=/; max-age=${60*60*24*365}`;
      builder.setUserAttributes({ locale: pathLocale });
    } else {
      // Default to en-US if no valid locale in path
      setLocaleState('en-US');
      document.cookie = `NEXT_LOCALE=en-US; path=/; max-age=${60*60*24*365}`;
      builder.setUserAttributes({ locale: 'en-US' });
    }
  }, [pathname]);

  const setLocale = (newLocale: string) => {
    // Update URL path with new locale
    const pathSegments = pathname.split('/');
    const validLocales = ['en-US', 'es-ES', 'fr-FR'];
    
    // If current path starts with a locale, replace it
    if (validLocales.includes(pathSegments[1])) {
      pathSegments[1] = newLocale;
    } else {
      // Otherwise insert the locale after the first segment
      pathSegments.splice(1, 0, newLocale);
    }
    
    const newPath = pathSegments.join('/');
    router.push(newPath);
    
    // Update cookie and Builder.io
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=${60*60*24*365}`;
    setLocaleState(newLocale);
    builder.setUserAttributes({ locale: newLocale });
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export const useLocale = () => useContext(LocaleContext); 