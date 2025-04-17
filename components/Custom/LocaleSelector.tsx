"use client";
import { useEffect, useState } from "react";

const LocaleSelector = () => {
  const [locale, setLocale] = useState("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("locale") || "en";
    setLocale(stored);
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    localStorage.setItem("locale", selected);
    document.cookie = `locale=${selected}; path=/`; // 👈 Add this line
  
    if (selected !== locale) {
      location.reload(); // Refresh to fetch localized content
    }
  };

  if (!mounted) return null;

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        padding: "0.75rem 1.5rem",
      }}
    >
      <label
        htmlFor="locale-select"
        style={{
          fontWeight: "bold",
          marginRight: "0.5rem",
          color: "#1d4ed8", // SaaS4U blue
        }}
      >
        Select Language:
      </label>
      <select
        id="locale-select"
        value={locale}
        onChange={handleChange}
        style={{
          padding: "0.4rem 0.6rem",
          border: "1px solid #1d4ed8",
          borderRadius: "4px",
          backgroundColor: "white",
          color: "#1d4ed8",
          fontWeight: "bold",
        }}
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="es">Español</option>
      </select>
    </header>
  );
};

export default LocaleSelector;