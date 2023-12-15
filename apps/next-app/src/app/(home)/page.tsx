'use client';

import { Button } from '@namviet-fe/core-ui';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Button
        onClick={() => {
          router.push('/products');
        }}
      >
        Product Page
      </Button>
      <Button
        onClick={() => {
          router.push('/contact');
        }}
      >
        Contact Page
      </Button>
    </div>
  );
}
