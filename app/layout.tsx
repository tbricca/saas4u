import { builder } from "@builder.io/sdk";
import "./globals.css";
import QueryProvider from "@/components/QueryProvider";
import dynamic from 'next/dynamic';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LocaleProvider } from "../context/LocaleContext";
import { Nav } from "@/components/Navigation";
import { Footer } from "../components/Footer";
import '../builder-registry';

// Add this to force client-side rendering for Builder content
const DynamicBuilderContent = dynamic(
  () => import('@/components/builder').then((mod) => mod.RenderBuilderContent),
  { ssr: false }
);

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SaaS4U - Unleash the Beast",
  description: "SaaS4U - It's not just Code. It's a Creature.",
};

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pageContent = await builder.get("page").toPromise();
  // const footerContent = await builder.get("footer").toPromise();
  const bannerContent = await builder.get("banner").toPromise();
  
  return (
    <html lang="en">
      <body className={inter.className}>
       
        <LocaleProvider>
          <QueryProvider>
            <div className="flex flex-col min-h-screen">
              <Nav />
              <main className="flex-grow">
                {bannerContent && <DynamicBuilderContent model="banner" content={bannerContent} />}
                {pageContent ? (
                  <DynamicBuilderContent model="page" content={pageContent} />
                ) : (
                  <div className="container">{children}</div>
                )}
              </main>
              <Footer />
            </div>
          </QueryProvider>
        </LocaleProvider>
      
      </body>
    </html>
  );
}
