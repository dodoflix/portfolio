import {
  ThemeToggle,
  CenteredLayout,
  StatusIcon,
  StatusIndicator,
  Heading,
  Text,
  Copyright,
  Icon,
  Icons,
} from '@portfolio/ui';

export const metadata = {
  title: 'Maintenance - Portfolio',
  description: 'Site is under maintenance',
};

export default function MaintenancePage() {
  return (
    <CenteredLayout
      topRight={<ThemeToggle />}
      footer={<Copyright name="Portfolio" />}
    >
      <StatusIcon variant="info" size="md" pulse>
        <Icon size="xl">{Icons.settings}</Icon>
      </StatusIcon>

      <div className="space-y-4">
        <Heading as="h1" size="xl">
          Under Maintenance
        </Heading>
        <Text size="lg" variant="muted" className="max-w-md">
          We're currently performing scheduled maintenance to improve your
          experience. We'll be back shortly.
        </Text>
      </div>

      <StatusIndicator variant="away" label="Maintenance in progress" />

      <Text size="sm" variant="muted">
        Estimated completion: Soon™
      </Text>
    </CenteredLayout>
  );
}
