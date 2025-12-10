'use client';

import Link from 'next/link';
import {
  Button,
  ThemeToggle,
  CenteredLayout,
  StatusIcon,
  Heading,
  Text,
  ActionButtons,
  TipsList,
  Copyright,
  Icon,
  Icons,
} from '@portfolio/ui';

export default function OfflinePage() {
  return (
    <CenteredLayout
      topRight={<ThemeToggle />}
      footer={<Copyright name="Portfolio" />}
    >
      <StatusIcon variant="default" size="md">
        <Icon size="xl">{Icons.wifiOff}</Icon>
      </StatusIcon>

      <div className="space-y-4">
        <Heading as="h1" size="xl">
          You're Offline
        </Heading>
        <Text size="lg" variant="muted" className="max-w-md">
          It looks like you've lost your internet connection. Please check your
          network and try again.
        </Text>
      </div>

      <ActionButtons>
        <Button onClick={() => window.location.reload()}>Try again</Button>
        <Button variant="outline" asChild>
          <Link href="/">Go home</Link>
        </Button>
      </ActionButtons>

      <TipsList
        title="Things to try:"
        items={[
          'Check your Wi-Fi or mobile data connection',
          'Try restarting your router',
          'Move closer to your Wi-Fi router',
          'Disable airplane mode if enabled',
        ]}
      />
    </CenteredLayout>
  );
}
