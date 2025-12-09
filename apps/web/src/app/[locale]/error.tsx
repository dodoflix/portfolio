'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Button, LanguageSwitcher, ThemeToggle } from '@portfolio/ui';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations('error');

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-background">
      {/* Theme & Language toggle */}
      <div className="absolute right-6 top-6 flex items-center gap-2">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>

      {/* Error Content */}
      <div className="flex flex-col items-center gap-8 text-center px-4">
        {/* Icon */}
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-destructive/10 text-destructive">
          <svg
            className="h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        {/* Message */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t('title')}
          </h1>
          <p className="max-w-md text-lg text-muted-foreground">
            {t('description')}
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <Button onClick={reset}>{t('tryAgain')}</Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            Go back
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Portfolio
      </div>
    </div>
  );
}

