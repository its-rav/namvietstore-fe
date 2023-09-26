'use client';

import { Button } from '@namviet-fe/core-ui';
import { Metadata } from 'next';
import { useRouter } from 'next/navigation';

import '@namviet-fe/core-ui/dist/style.css';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Products description',
};

export default function ProductsPage() {
  const router = useRouter();
  return (
    <>
      <Button
        onClick={() => {
          router.push('/');
        }}
      >
        Homepage
      </Button>
    </>
  );
}
