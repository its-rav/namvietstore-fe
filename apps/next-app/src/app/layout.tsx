import { Metadata } from 'next';

import '@/styles/global.css';
import '@namviet-fe/core-ui/dist/style.css';

export const metadata: Metadata = {
  title: 'Nam Viet Store',
  description: 'Nam Viet Store description',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
