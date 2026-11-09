import './globals.css';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Lina Mora — Independent Creative Studio',
  description: 'Visuelle Identitäten und digitale Erfahrungen mit Haltung.',
};

export const viewport: Viewport = { themeColor: '#f3f2ee', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="de"><body>{children}</body></html>;
}
