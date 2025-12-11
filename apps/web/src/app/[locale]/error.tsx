'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import {
  Button,
  LanguageSwitcher,
  ThemeToggle,
  HStack,
  // Compositions
  StatusPage,
} from '@portfolio/ui';
import { AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations('error');

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="relative">
      {/* Top right actions */}
      <div className="absolute top-4 right-4 z-50">
        <HStack gap={2}>
          <LanguageSwitcher />
          <ThemeToggle />
        </HStack>
      </div>

      <StatusPage
        code="500"
        icon={<AlertTriangle className="h-16 w-16 text-destructive" />}
        title={t('title')}
        description={t('description')}
        actions={
          <>
            <Button onClick={reset}>{t('tryAgain')}</Button>
            <Button variant="outline" onClick={() => window.history.back()}>
              Go back
            </Button>
          </>
        }
      />
    </div>
  );
}
