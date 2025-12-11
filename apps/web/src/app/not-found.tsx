'use client';

import Link from 'next/link';
import {
  Button,
  ThemeToggle,
  CenteredLayout,
  BigText,
  Heading,
  Text,
  ActionButtons,
  Copyright,
} from '@portfolio/ui';

export default function RootNotFound() {
  return (
    <CenteredLayout
      topRight={<ThemeToggle />}
      footer={<Copyright name="Portfolio" />}
    >
      <BigText text="404">
        <Heading as="h1" size="xl">
          Page not found
        </Heading>
      </BigText>

      <Text size="lg" variant="muted" className="max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </Text>

      <ActionButtons>
        <Button asChild>
          <Link href="/">Back to home</Link>
        </Button>
        <Button variant="outline" onClick={() => window.history.back()}>
          Go back
        </Button>
      </ActionButtons>
    </CenteredLayout>
  );
}

