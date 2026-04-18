import type { Metadata } from 'next';
import './globals.css';
import { Space_Grotesk, Space_Mono } from 'next/font/google';
import CustomCursor from './components/CustomCursor';
import { ActiveSectionProvider } from './contexts/ActiveSectionContext';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  weight: ['300', '400', '500', '600', '700'],
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Julienne Panes Portfolio',
  description: 'Portfolio of Julienne Panes - Software Developer',
  applicationName: 'Julienne Panes Portfolio',
  authors: [
    { name: 'Julienne Panes', url: 'https://juliennepanes.vercel.app/' },
  ],
  keywords: [
    'Julienne Panes',
    'Portfolio',
    'Software Developer',
    'Web Developer',
    'Full-Stack Developer',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'CSS',
    'HTML',
    'Tech Stack',
    'Projects',
    'Experience',
    'About Me',
  ],
  openGraph: {
    title: 'Julienne Panes',
    description: 'Portfolio of Julienne Panes - Software Developer',
    url: 'https://juliennepanes.pages.dev/',
    siteName: 'Julienne Panes Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://https://juliennepanes.pages.dev/Preview.png' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${spaceMono.variable} antialiased`}
      >
        <CustomCursor />
        <ActiveSectionProvider>{children}</ActiveSectionProvider>
      </body>
    </html>
  );
}
