'use client';

import { useEffect } from 'react';
import { redirect } from 'next/navigation';

export default function DevLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Redirect in production
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      window.location.href = '/';
    }
  }, []);

  // Don't render in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return <>{children}</>;
}

