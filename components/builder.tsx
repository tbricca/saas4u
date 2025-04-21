'use client';

import { BuilderComponent } from '@builder.io/react';
import { useEffect, useState } from 'react';

interface RenderBuilderContentProps {
  content: any;
  model: string;
  options?: any;
  data?: any;
}

export function RenderBuilderContent({ content, model, options = {}, data = {} }: RenderBuilderContentProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <BuilderComponent
      content={content}
      model={model}
      options={{
        ...options,
        data: {
          ...data,
          ...content?.data
        }
      }}
    />
  );
}

