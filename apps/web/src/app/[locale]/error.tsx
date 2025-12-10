'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import {
  Button,
  LanguageSwitcher,
  ThemeToggle,
  CenteredLayout,
  StatusIcon,
  Heading,
  Text,
  ActionButtons,
  Copyright,
  Icon,
  Icons,
} from '@portfolio/ui';

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
    <CenteredLayout
      topRight={
        <>
          <LanguageSwitcher />
          <ThemeToggle />
        </>
      }
      footer={<Copyright name="Portfolio" />}
    >
      <StatusIcon variant="error" size="md">
        <Icon size="xl">{Icons.warning}</Icon>
      </StatusIcon>

      <div className="space-y-4">
        <Heading as="h1" size="xl">
          {t('title')}
        </Heading>
        <Text size="lg" variant="muted" className="max-w-md">
          {t('description')}
        </Text>
      </div>

      <ActionButtons>
        <Button onClick={reset}>{t('tryAgain')}</Button>
        <Button variant="outline" onClick={() => window.history.back()}>
          Go back
        </Button>
      </ActionButtons>
    </CenteredLayout>
  );
}
