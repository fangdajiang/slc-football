import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n';

export default function RootLayout({ children }: { children: ReactNode }) {
  redirect(`/${defaultLocale}`);
}