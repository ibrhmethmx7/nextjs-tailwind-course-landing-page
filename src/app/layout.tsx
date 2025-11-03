import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout, FixedPlugin } from "@/components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deykem \u2013 WordPress Eklentileri, Otomasyon ve Yapay Zek\u00e2 Hizmetleri",
  description:
    "Deykem, WordPress eklentileri, \u00f6zel yaz\u0131l\u0131m geli\u015ftirme, otomasyon sistemleri ve yapay zek\u00e2 \u00e7\u00f6z\u00fcmleri sunar.",
  keywords: [
    "Deykem",
    "Deykem Teknoloji",
    "WordPress eklentileri",
    "otomasyon sistemleri",
    "yapay zek\u00e2 \u00e7\u00f6z\u00fcmleri",
    "yaz\u0131l\u0131m geli\u015ftirme",
  ],
  openGraph: {
    title: "Deykem \u2013 WordPress Eklentileri, Otomasyon ve Yapay Zek\u00e2 Hizmetleri",
    description:
      "Deykem, WordPress eklentileri, \u00f6zel yaz\u0131l\u0131m geli\u015ftirme, otomasyon sistemleri ve yapay zek\u00e2 \u00e7\u00f6z\u00fcmleri sunar.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="/deykem-logo.png" type="image/png" />
      </head>
      <body className={roboto.className}>
        <Layout>
          {children}
          <FixedPlugin />
        </Layout>
      </body>
    </html>
  );
}
