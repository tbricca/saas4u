import { builder } from "@builder.io/sdk";
import dynamic from 'next/dynamic';

const DynamicBuilderContent = dynamic(
  () => import('@/components/builder').then((mod) => mod.RenderBuilderContent),
  { ssr: false }
);

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function Home({ params }: { params: { locale?: string } }) {
  const locale = params.locale || 'en-US';
  
  const content = await builder
    .get('page', {
      userAttributes: {
        urlPath: '/',
        locale: locale
      },
      options: {
        locale: locale
      },
      prerender: true,
    })
    .toPromise();

  return (
    <div className="container mx-auto px-4 py-8">
      {content ? (
        <DynamicBuilderContent
          content={content}
          model="page"
          options={{
            includeRefs: true,
            enrich: true,
            locale: locale
          }}
        />
      ) : (
        <div>No content found</div>
      )}
    </div>
  );
}