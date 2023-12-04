'use client';

import { IntlContextProvider } from '@namviet-fe/core-ui';
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
};

const HtmlWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
};

export default function RootLayout({ children, footer }: RootLayoutProps) {
  return (
    <IntlContextProvider defaultLocale={'en'}>
      <HtmlWrapper>
        {children}
        {footer}
      </HtmlWrapper>
    </IntlContextProvider>
  );
}
