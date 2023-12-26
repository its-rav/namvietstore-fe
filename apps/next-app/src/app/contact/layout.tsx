import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Information',
};

type ContactLayoutProps = {
  children: React.ReactNode;
};

export default function Contactlayout({ children }: ContactLayoutProps) {
  return <>{children}</>;
}
