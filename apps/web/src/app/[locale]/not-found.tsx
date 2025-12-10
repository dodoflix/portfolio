'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import {
  Button,
  LanguageSwitcher,
  ThemeToggle,
  CenteredLayout,
  BigText,
  Heading,
  Text,
  ActionButtons,
  Copyright,
} from '@portfolio/ui';

export default function NotFound() {
  const t = useTranslations('notFound');

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
      <BigText text="404">
        <Heading as="h1" size="xl">
          {t('title')}
        </Heading>
      </BigText>

      <Text size="lg" variant="muted" className="max-w-md">
        {t('description')}
      </Text>

      <ActionButtons>
        <Button asChild>
          <Link href="/">{t('backHome')}</Link>
        </Button>
        <Button variant="outline" onClick={() => window.history.back()}>
          Go back
        </Button>
      </ActionButtons>
    </CenteredLayout>
  );
}
