"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

export const HeaderLocale = () => {
  const [locale, setLocale] = React.useState("en");

  return (
    <>
      <div className="w-full bg-black h-2" />
      <header className="w-full bg-black text-white border-b border-gray-800">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" passHref>
            <span className="text-white font-bold text-2xl">SaaS4U</span>
          </Link>
          <nav className="hidden md:flex gap-8 font-medium text-sm">
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Company</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Contact</Link>
          </nav>
          <div className="flex items-center gap-4">
            <select
              className="bg-black border border-gray-600 text-white text-sm px-2 py-1 rounded"
              value={locale}
              onChange={(e) => setLocale(e.target.value)}
            >
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="fr">FR</option>
              <option value="zh">ZH</option>
            </select>
            <Button className="bg-white text-black text-sm px-4 py-2 rounded-md hover:bg-gray-200">
              Login / Sign Up
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};