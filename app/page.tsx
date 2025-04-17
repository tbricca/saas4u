import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../components/builder";
import { cookies } from "next/headers";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    page?: string[];
  };
}

export default async function Page({ params }: PageProps) {
  const urlPath = "/" + (params.page?.join("/") || "");
  const cookieStore = cookies();
  const locale = cookieStore.get("locale")?.value || "en";

  const content = await builder
    .get("page", {
      locale,
      userAttributes: {
        urlPath,
        locale,
      },
      options: {
        locale,
      },
    })
    .toPromise();

  return (
    <RenderBuilderContent
      model="page"
      content={content}
      locale={locale}
    />
  );
}