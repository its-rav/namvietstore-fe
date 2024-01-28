import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Introduction',
  description: 'Contact Information',
};

type IntroLayoutProps = {
  children: React.ReactNode;
};

export default function Introlayout({ children }: IntroLayoutProps) {
  return <>{children}</>;
}
