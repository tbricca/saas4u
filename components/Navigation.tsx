
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Builder } from '@builder.io/react';
import LocaleSwitcher from './LocaleSwitcher';

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Default static content
  const navContent = {
    logo: 'https://cdn.builder.io/api/v1/image/assets%2Ff88d5a483d6e42bb9e7990f41fc9afdf%2F56f6f2dbb0dd44b4828c83a9d1343ff7',
    links: [
      { label: 'Product', url: '/product' },
      { label: 'Solutions', url: '/solutions' },
      { label: 'Resources', url: '/resources' },
      { label: 'Pricing', url: '/pricing' }
    ],
    ctaText: 'Request Demo',
    loginText: 'Login'
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img 
              src={navContent.logo}
              alt="Logo"
              className="h-20 w-auto -my-2"
            />
          </Link>

          {/*  Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navContent.links.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="h-6 w-px bg-gray-300" />
            <LocaleSwitcher />
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
              {navContent.ctaText}
            </button>
            <div className="h-6 w-px bg-gray-300" />
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
              {navContent.loginText}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navContent.links.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t pt-4 mt-4">
              <div className="px-4 py-2">
                <LocaleSwitcher />
              </div>
              <button className="w-full px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                {navContent.ctaText}
              </button>
              <button className="w-full px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg mt-2">
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
      type: 'file',
      allowedFileTypes: ['png', 'jpg', 'svg'],
      defaultValue: 'https://cdn.builder.io/api/v1/image/assets%2Ff88d5a483d6e42bb9e7990f41fc9afdf%2F56f6f2dbb0dd44b4828c83a9d1343ff7'
    },
    {
      name: 'links',
      type: 'list',
      defaultValue: [
        { label: 'Product', url: '/product' },
        { label: 'Solutions', url: '/solutions' },
        { label: 'Resources', url: '/resources' },
        { label: 'Pricing', url: '/pricing' }
      ],
      subFields: [
        { name: 'label', type: 'text' },
        { name: 'url', type: 'url' }
      ]
    },
    { 
      name: 'ctaText',
      type: 'text',
      defaultValue: 'Request Demo'
    },
    { 
      name: 'loginText',
      type: 'text',
      defaultValue: 'Login'
    }
  ]
});