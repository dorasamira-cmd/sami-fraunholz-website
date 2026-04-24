import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sami Fraunholz | Sozialcoaching & ASOG Consulting',
  description: 'Coaching für Einzelpersonen und Consulting für ASOG-Unterkünfte und soziale Einrichtungen in Berlin.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
