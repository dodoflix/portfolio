'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import {
  Button,
  ThemeToggle,
  Card,
  CardContent,
  VStack,
  // Compositions
  StatusPage,
} from '@portfolio/ui';
import { WifiOff, CheckCircle2 } from 'lucide-react';

export default function OfflinePage() {
  const t = useTranslations('offline');

  const tips = [
    t('tips.wifi'),
    t('tips.router'),
    t('tips.airplane'),
  ];

  return (
    <div className="relative">
      {/* Top right actions */}
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <StatusPage
        icon={<WifiOff className="h-16 w-16 text-muted-foreground" />}
        title={t('title')}
        description={t('description')}
        actions={
          <>
            <Button onClick={() => window.location.reload()}>{t('tryAgain')}</Button>
            <Button variant="outline" asChild>
              <Link href="/">{t('backHome')}</Link>
            </Button>
          </>
        }
      >
        <Card className="mt-8 max-w-md text-left">
          <CardContent className="pt-6">
            <VStack gap={4} align="start">
              <p className="text-sm font-medium">{t('tips.title')}</p>
              <ul className="space-y-2">
                {tips.map((tip) => (
                  <li key={tip} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </VStack>
          </CardContent>
        </Card>
      </StatusPage>
    </div>
  );
}
