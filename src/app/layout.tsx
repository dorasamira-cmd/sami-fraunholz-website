import './globals.css';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Sami Fraunholz — Management Portfolio',
  description: 'Management, digitale Transformation und KI-gestützte Organisationslösungen von Sami Fraunholz.',
};

export const viewport: Viewport = { themeColor: '#f3f2ee', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="de"><body>{children}</body></html>;
}
