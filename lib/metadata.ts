import { Metadata } from 'next';
import { locales } from './i18n';

type LocaleMetadata = {
  [key: string]: {
    title: string;
    description: string;
    keywords: string[];
  };
};

const metadataByLocale: LocaleMetadata = {
  zh: {
    title: 'SLC 上海胜利之光少儿社区足球队',
    description: '培养勇敢、独立、自信、有爱的少年 - 上海三林地区专业少儿足球训练',
    keywords: ['少儿足球', '上海足球', '青训', '社区足球', '足球训练', 'SLC足球队']
  },
  en: {
    title: 'SLC Shanghai Victory Light Youth Football Team',
    description: 'Cultivating brave, independent, confident and loving youth through professional football training in Shanghai',
    keywords: ['youth football', 'Shanghai football', 'football training', 'community football', 'SLC football']
  },
  es: {
    title: 'Equipo Infantil SLC Shanghai Victory Light',
    description: 'Cultivando jóvenes valientes, independientes, seguros y amorosos a través del entrenamiento profesional de fútbol',
    keywords: ['fútbol infantil', 'fútbol Shanghai', 'entrenamiento', 'fútbol comunitario', 'equipo SLC']
  }
};

export function generateMetadata(locale: string): Metadata {
  const meta = metadataByLocale[locale] || metadataByLocale.zh;
  
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: 'SLC Football Team' }],
    creator: 'SLC Shanghai Victory Light',
    publisher: 'SLC Football',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://slc-football.com'),
    alternates: {
      canonical: '/',
      languages: {
        'zh-CN': '/zh',
        'en-US': '/en',
        'es-ES': '/es',
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: 'https://slc-football.com',
      siteName: 'SLC Football',
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'SLC Shanghai Victory Light Football Team',
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['/images/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}