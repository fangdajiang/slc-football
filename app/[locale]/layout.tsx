import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { locales } from "@/lib/i18n";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SLC 上海胜利之光少儿社区足球队",
  description: "培养勇敢、独立、自信、有爱的少年 - SLC Shanghai Victory Light Youth Community Football Team",
  keywords: ["足球", "青训", "上海", "少儿足球", "社区足球", "football", "youth training", "Shanghai"],
  openGraph: {
    title: "SLC 上海胜利之光少儿社区足球队",
    description: "培养勇敢、独立、自信、有爱的少年",
    type: "website",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${inter.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
