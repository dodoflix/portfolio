'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import {
  Button,
  ThemeToggle,
  // Compositions
  StatusPage,
} from '@portfolio/ui';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <div className="relative">
      {/* Top right actions */}
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <StatusPage
        code="404"
        title={t('title')}
        description={t('description')}
        actions={
          <>
            <Button asChild>
              <Link href="/">{t('backHome')}</Link>
            </Button>
            <Button variant="outline" onClick={() => window.history.back()}>
              Go back
            </Button>
          </>
        }
      />
    </div>
  );
}
