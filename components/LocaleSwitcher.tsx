'use client';

import { useLocale } from '../context/LocaleContext';
import { usePathname } from 'next/navigation';

export default function LocaleSwitcher() {
  const { locale, setLocale } = useLocale();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    setLocale(newLocale);
  };

  return (
    <select
      value={locale}
      onChange={(e) => handleLocaleChange(e.target.value)}
      className="text-gray-600 hover:text-indigo-600 transition-colors bg-transparent border-none focus:outline-none cursor-pointer"
    >
      <option value="en-US">EN</option>
      <option value="es-ES">ES</option>
      <option value="fr-FR">FR</option>
    </select>
  );
}

