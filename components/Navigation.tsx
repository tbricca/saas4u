// components/Nav.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Builder } from '@builder.io/react';
import LocaleSwitcher from './LocaleSwitcher';

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Updated navigation content to match the image
  const navContent = {
    logo: 'SaaS4U',
    links: [
      { label: 'Home', url: '/' },
      { label: 'About', url: '/about' },
      { label: 'Blog', url: 'https://saas4u.vercel.app//en-US/blog-post' },
      { label: 'Contact', url: '/contact' }
    ],
    loginText: 'Dashboard'
  };

  return (
    <nav className="sticky top-0 z-50 bg-black text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center text-xl font-semibold">
            {navContent.logo}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navContent.links.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <LocaleSwitcher />
            <button className="text-white hover:text-gray-300 transition-colors border border-white px-4 py-2 rounded">
              {navContent.loginText}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navContent.links.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="block text-white hover:text-gray-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-gray-700">
              <div className="px-4 py-2">
                <LocaleSwitcher />
              </div>
              <button className="w-full text-left text-white hover:text-gray-300 py-2 border border-white px-4 rounded">
                {navContent.loginText}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Register as editable component without a model
Builder.registerComponent(Nav, {
  name: 'Nav',
  inputs: [
    {
      name: 'logo',
      type: 'text',
      defaultValue: 'SaaS4U'
    },
    {
      name: 'links',
      type: 'list',
      defaultValue: [
        { label: 'Home', url: '/' },
        { label: 'About', url: '/about' },
        { label: 'Blog', url: 'https://saas4u.vercel.app/en-US/blog-post' },
        { label: 'Contact', url: '/contact' }
      ],
      subFields: [
        { name: 'label', type: 'text' },
        { name: 'url', type: 'url' }
      ]
    },
    { 
      name: 'loginText',
      type: 'text',
      defaultValue: 'Dashboard'
    }
  ]
});