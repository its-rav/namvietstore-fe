import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Information',
};

type IntroLayoutProps = {
  children: React.ReactNode;
};

export default function Introlayout({ children }: IntroLayoutProps) {
  return <>{children}</>;
}
