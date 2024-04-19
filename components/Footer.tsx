'use client';

import Link from 'next/link';
import { Builder } from '@builder.io/react';

export const Footer = () => {
  const footerContent = {
    links: [
      { label: 'Home', url: '/' },
      { label: 'Product', url: '/product' },
      { label: 'Company', url: '/company' },
      { label: 'Blog', url: '/blog' },
      { label: 'Contact', url: '/contact' }
    ],
    companyInfo: {
      name: 'SaaS4U',
      description: 'Unleash the Beast',
      copyright: `© ${new Date().getFullYear()} SaaS4U. All rights reserved.`
    },
    sections: [
      {
        title: 'Product',
        links: [
          { label: 'Features', url: '/features' },
          { label: 'Pricing', url: '/pricing' },
          { label: 'Documentation', url: '/docs' },
          { label: 'API Reference', url: '/api' }
        ]
      },
      {
        title: 'Company',
        links: [
          { label: 'About Us', url: '/about' },
          { label: 'Careers', url: '/careers' },
          { label: 'Press', url: '/press' },
          { label: 'Partners', url: '/partners' }
        ]
      },
      {
        title: 'Resources',
        links: [
          { label: 'Blog', url: '/blog' },
          { label: 'Support', url: '/support' },
          { label: 'Status', url: '/status' },
          { label: 'Contact Sales', url: '/contact' }
        ]
      }
    ]
  };

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-semibold">
              {footerContent.companyInfo.name}
            </Link>
            <p className="text-gray-400">
              {footerContent.companyInfo.description}
            </p>
          </div>

          {/* Footer Sections */}
          {footerContent.sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.url}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              {footerContent.companyInfo.copyright}
            </p>
            <div className="flex space-x-6">
              {footerContent.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Register as editable component
Builder.registerComponent(Footer, {
  name: 'Footer',
  inputs: [
    {
      name: 'companyInfo',
      type: 'object',
      subFields: [
        { name: 'name', type: 'text', defaultValue: 'SaaS4U' },
        { name: 'description', type: 'text', defaultValue: 'Building the future of SaaS development' },
      ]
    },
    {
      name: 'sections',
      type: 'list',
      defaultValue: [
        {
          title: 'Product',
          links: [
            { label: 'Features', url: '/features' },
            { label: 'Pricing', url: '/pricing' },
            { label: 'Documentation', url: '/docs' },
            { label: 'API Reference', url: '/api' }
          ]
        },
        {
          title: 'Company',
          links: [
            { label: 'About Us', url: '/about' },
            { label: 'Careers', url: '/careers' },
            { label: 'Press', url: '/press' },
            { label: 'Partners', url: '/partners' }
          ]
        },
        {
          title: 'Resources',
          links: [
            { label: 'Blog', url: '/blog' },
            { label: 'Support', url: '/support' },
            { label: 'Status', url: '/status' },
            { label: 'Contact Sales', url: '/contact' }
          ]
        }
      ],
      subFields: [
        { name: 'title', type: 'text' },
        {
          name: 'links',
          type: 'list',
          subFields: [
            { name: 'label', type: 'text' },
            { name: 'url', type: 'url' }
          ]
        }
      ]
    }
  ]
}); 