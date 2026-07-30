import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/config/site';
import { ModalProvider } from '@/context/modal-context';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { LeadCaptureModal } from '@/components/forms/lead-capture-modal';
import { LenisProvider } from '@/components/providers/lenis-provider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    'Accredian Enterprise',
    'Workforce Upskilling',
    'Corporate Training',
    'CAT Framework',
    'Executive Learning',
  ],
  authors: [{ name: 'Accredian Enterprise' }],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-slate-900 font-sans antialiased selection:bg-[#1D61E7] selection:text-white">
        <ModalProvider>
          <LenisProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
            <LeadCaptureModal />
          </LenisProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
