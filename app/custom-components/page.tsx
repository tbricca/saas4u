// app/[...page]/page.tsx
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";
import { notFound } from "next/navigation";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface Props {
  params: { page?: string[] };
}

export default async function Page({ params }: Props) {
  const builderModelName = "figma-imports";
  const urlPath = "/" + (params?.page?.join("/") || "");

  console.log("🛠 Rendering page for:", urlPath);

  const content = await builder
    .get(builderModelName, {
      userAttributes: { urlPath },
    })
    .toPromise();

  if (!content) {
    notFound();
  }

  return <RenderBuilderContent model={builderModelName} content={content} />;
}