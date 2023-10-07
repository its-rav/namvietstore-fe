'use client';

import { Button } from '@namviet-fe/core-ui';
import { useRouter } from 'next/navigation';

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
      <div>This is Product Page</div>
    </>
  );
}
