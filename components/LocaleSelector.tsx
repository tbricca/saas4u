"use client";
import { useState } from "react";

function LocaleSelector({ defaultLocale = "en" }) {
  const [locale, setLocale] = useState(defaultLocale);

  return (
    <div>
      <label htmlFor="locale">Select Locale:</label>
      <select
        id="locale"
        value={locale}
        onChange={(e) => setLocale(e.target.value)}
      >
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
}

export default LocaleSelector;