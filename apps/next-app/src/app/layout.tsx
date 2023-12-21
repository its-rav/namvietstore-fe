'use client';
import { Metadata } from 'next';

import '@/styles/global.css';
import '@namviet-fe/core-ui/dist/style.css';

export const metadata: Metadata = {
  title: 'Nam Viet Store',
  description: 'Nam Viet Store description',
};

type RootLayoutProps = {
  children: React.ReactNode;
  footer: React.ReactNode;
  topbar: React.ReactNode;
};

const HtmlWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className='relative'>{children}</body>
    </html>
  );
};

export default function RootLayout({
  children,
  footer,
  topbar,
}: RootLayoutProps) {
  return (
    <HtmlWrapper>
      {topbar}
      <main className='pt-[60px]'>{children}</main>
      {footer}
    </HtmlWrapper>
  );
}
