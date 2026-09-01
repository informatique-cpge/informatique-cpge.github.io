import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({ variable: '--font-geist', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://informatique-cpge.github.io'),
  title: 'Informatique en CPGE',
  description: "Cours et exercices d'informatique pour les filières MPI, MP2I, MP et BCPST.",
  openGraph: {
    title: 'Informatique en CPGE',
    description: 'Cours et exercices pour les classes préparatoires',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Informatique en CPGE' }],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Informatique en CPGE',
    description: 'Cours et exercices pour les classes préparatoires',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${geist.variable} antialiased`}>{children}</body>
    </html>
  );
}
