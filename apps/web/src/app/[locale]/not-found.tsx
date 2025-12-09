'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button, LanguageSwitcher, ThemeToggle } from '@portfolio/ui';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-background">
      {/* Theme & Language toggle */}
      <div className="absolute right-6 top-6 flex items-center gap-2">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>

      {/* 404 Content */}
      <div className="flex flex-col items-center gap-8 text-center px-4">
        {/* Large 404 */}
        <div className="relative">
          <span className="text-[12rem] font-bold leading-none text-muted-foreground/10 sm:text-[16rem]">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {t('title')}
            </h1>
          </div>
        </div>

        {/* Description */}
        <p className="max-w-md text-lg text-muted-foreground">
          {t('description')}
        </p>

        {/* Actions */}
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/">{t('backHome')}</Link>
          </Button>
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

