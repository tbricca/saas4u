"use client";
import * as React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

export function Header() {
  return (
    <>
      {/* Top Blue Bar */}
      <div className="w-full bg-blue-600 h-2" />

      <header className="w-full border-b">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* SaaS4U Logo */}
          <Link href="/" passHref>
            <span className="text-blue-600 font-bold text-2xl">SaaS4U</span>
          </Link>

          {/* Nav Items */}
          <nav className="hidden md:flex gap-8 text-blue-600 font-medium text-sm">
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Company</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Contact</Link>
          </nav>

          {/* Login / Sign Up Button */}
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md">
            Login / Sign Up
          </Button>
        </div>
      </header>
    </>
  );
}