import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
import AnalyticsTracker from './analytics-tracker';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Oscar Cardoso | Web Developer & Tech Enthusiast",
  description: "Explora el blog y proyectos de Oscar Cardoso. Desarrollo web moderno con tecnologías como React, Next.js, Drupal y más.",
  keywords: [
    "Oscar Cardoso",
    "Desarrollador Web",
    "Next.js",
    "React",
    "Drupal",
    "Portafolio Web",
    "Blog de desarrollo",
    "Frontend Developer",
    "Full Stack",
    "Web Developer"
  ],
  authors: [{ name: "Oscar Cardoso", url: "https://www.cardoso.dev" }],
  creator: "Oscar Cardoso",
  openGraph: {
    title: "Oscar Cardoso | Web Developer & Tech Enthusiast",
    description: "Portafolio y blog de Oscar Cardoso, desarrollador especializado en tecnologías modernas como React, Next.js y Drupal.",
    url: "https://www.cardoso.dev",
    siteName: "Oscar Cardoso",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "https://www.cardoso.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Oscar Cardoso Portafolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Oscar Cardoso | Web Developer & Tech Enthusiast",
    description: "Portafolio y blog personal sobre desarrollo web, tecnologías modernas y proyectos.",
    creator: "@oscar1w2e",
    images: ["https://www.cardoso.dev/og-image.jpg"]
  },
  metadataBase: new URL("https://www.cardoso.dev")
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         {/* Script de GA4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-3WJHMT4J4Z`}
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3WJHMT4J4Z', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <AnalyticsTracker />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
