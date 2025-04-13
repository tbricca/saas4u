import { builder } from "@builder.io/sdk";
import "./globals.css";
import Footer from "@/components/Layout/Footer";
import { RenderBuilderContent } from "@/components/builder";
import QueryProvider from "@/components/QueryProvider";
import { HeaderLocale } from "../components/Custom/Header-Locale";// ✅ your custom header

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bannerContent = await builder.get("banner").toPromise();

  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <main>
            {bannerContent && (
              <RenderBuilderContent model="banner" content={bannerContent} />
            )}
            <HeaderLocale /> {/* ✅ using your localized header */}
            <div className="container">{children}</div>
          </main>
        </QueryProvider>
      </body>
    </html>
  );
}
import { builder } from "@builder.io/sdk";
import { Header } from "@/components/Layout/Header";
import "../builder-registry";
import "./globals.css";
import Footer from "@/components/Layout/Footer";
import { RenderBuilderContent } from "@/components/builder";
import QueryProvider from "@/components/QueryProvider";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerContent = await builder
    .get("header-links", { fields: "data" })
    .toPromise();
  const bannerContent = await builder.get("banner").toPromise();
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <main>
            {bannerContent && <RenderBuilderContent model="banner" content={bannerContent} />}
            <Header content={headerContent} />
            <div className="container">{children}</div>
          </main>
        </QueryProvider>
      </body>
    </html>
  );
}
