import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Products description',
};

type ProductsLayoutProps = {
  children: React.ReactNode;
};

export default function Productlayout({ children }: ProductsLayoutProps) {
  return <>{children}</>;
}
