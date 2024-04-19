'use client';

import "@builder.io/widgets";
import { builder, Builder } from "@builder.io/react";


import IconCard from "./components/Card/IconCard";



import { Nav } from '@/components/Navigation';

// Initialize Builder.io on the client side
if (typeof window !== 'undefined') {
  builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);
}

Builder.registerComponent(Nav, {
  name: 'Nav',
});

Builder.registerComponent(HeroSection, {
  name: 'HeroSection',
  inputs: [
    { name: 'title', type: 'text' },
    { name: 'description', type: 'text' },
    { name: 'image', type: 'file' }
  ]
});



Builder.registerComponent(IconCard, {
  name: 'IconCard',
  inputs: [
    {
      name: 'icon',
      type: 'file',
      allowedFileTypes: ['svg', 'png', 'jpg'],
      defaultValue: 'https://via.placeholder.com/100'
    },
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Card Title'
    },
    {
      name: 'description',
      type: 'string',
      defaultValue: 'Card description goes here...'
    }
  ]
}); 