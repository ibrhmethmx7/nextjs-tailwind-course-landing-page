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
  title: "Deykem – WordPress Eklentileri, Otomasyon ve Yapay Zekâ Hizmetleri",
  description:
    "Deykem, WordPress eklentileri, özel yazılım geliştirme, otomasyon sistemleri ve yapay zekâ çözümleri sunar.",
  keywords: [
    "Deykem",
    "Deykem Teknoloji",
    "WordPress eklentileri",
    "otomasyon sistemleri",
    "yapay zekâ çözümleri",
    "yazılım geliştirme",
  ],
  openGraph: {
    title: "Deykem – WordPress Eklentileri, Otomasyon ve Yapay Zekâ Hizmetleri",
    description:
      "Deykem, WordPress eklentileri, özel yazılım geliştirme, otomasyon sistemleri ve yapay zekâ çözümleri sunar.",
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
