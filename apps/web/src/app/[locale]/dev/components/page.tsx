'use client';

import { useState } from 'react';
import {
  // UI Components
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Avatar,
  AvatarFallback,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
  Label,
  LanguageSwitcher,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Progress,
  ScrollArea,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Skeleton,
  Slider,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  ThemeToggle,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  // Layout Components
  Container,
  Section,
  PageLayout,
  CenteredLayout,
  // Typography Components
  Heading,
  Text,
  GradientText,
  // Navigation Components
  Navbar,
  NavLink,
  Footer,
  Logo,
  Copyright,
  // Content Components
  SectionHeader,
  Hero,
  ProjectCard,
  SkillBar,
  TechBadge,
  StatCard,
  // Status Components
  StatusIcon,
  StatusIndicator,
  BigText,
  ActionButtons,
  // Utility Components
  TypeWriter,
  SocialLinks,
  TipsList,
  FadeIn,
  GitHubIcon,
  LinkedInIcon,
  EmailIcon,
} from '@portfolio/ui';

function ComponentSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <Heading as="h2" size="lg">{title}</Heading>
      <div className="rounded-lg border bg-card p-6">{children}</div>
    </section>
  );
}

export default function ComponentsPage() {
  const [progress, setProgress] = useState(45);
  const [sliderValue, setSliderValue] = useState([50]);
  const [checked, setChecked] = useState(false);
  const [switchOn, setSwitchOn] = useState(false);
  const mounted = true;

  const socialLinks = [
    { name: 'Email', href: 'mailto:test@example.com', icon: <EmailIcon /> },
    { name: 'GitHub', href: 'https://github.com', icon: <GitHubIcon /> },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: <LinkedInIcon /> },
  ];

  return (
    <TooltipProvider>
      <PageLayout>
        {/* Header */}
        <Navbar
          logo={<Logo href="/dev/components" />}
          actions={
            <>
              <Badge variant="secondary">Dev Only</Badge>
              <LanguageSwitcher />
              <ThemeToggle />
            </>
          }
        >
          <NavLink href="#base">Base</NavLink>
          <NavLink href="#layout">Layout</NavLink>
          <NavLink href="#content">Content</NavLink>
          <NavLink href="#status">Status</NavLink>
          <NavLink href="#utility">Utility</NavLink>
        </Navbar>

        {/* Main Content */}
        <Container className="py-8 space-y-12">
          <FadeIn>
            <div className="space-y-2">
              <Heading as="h1" size="2xl">Component Library</Heading>
              <Text variant="muted">All available components in the UI library</Text>
            </div>
          </FadeIn>

          {/* Base UI Components */}
          <div id="base" className="space-y-8">
            <Heading as="h2" size="xl">Base Components</Heading>

            {/* Buttons */}
            <ComponentSection title="Button">
              <div className="flex flex-wrap gap-4">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
              <Separator className="my-4" />
              <div className="flex flex-wrap gap-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">+</Button>
                <Button disabled>Disabled</Button>
              </div>
            </ComponentSection>

            {/* Badge */}
            <ComponentSection title="Badge">
              <div className="flex flex-wrap gap-4">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </ComponentSection>

            {/* Input & Textarea */}
            <ComponentSection title="Input & Textarea">
              <div className="grid gap-4 max-w-md">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="disabled">Disabled</Label>
                  <Input id="disabled" disabled placeholder="Disabled input" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Type your message..." />
                </div>
              </div>
            </ComponentSection>

            {/* Checkbox & Switch */}
            <ComponentSection title="Checkbox & Switch">
              <div className="flex flex-col gap-6">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" checked={checked} onCheckedChange={(c) => setChecked(c as boolean)} />
                  <Label htmlFor="terms">Accept terms</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="airplane" checked={switchOn} onCheckedChange={setSwitchOn} />
                  <Label htmlFor="airplane">Airplane Mode</Label>
                </div>
              </div>
            </ComponentSection>

            {/* Select */}
            <ComponentSection title="Select">
              <div className="max-w-xs">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Option 1</SelectItem>
                    <SelectItem value="2">Option 2</SelectItem>
                    <SelectItem value="3">Option 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </ComponentSection>

            {/* Slider & Progress */}
            <ComponentSection title="Slider & Progress">
              <div className="space-y-8 max-w-md">
                <div className="space-y-2">
                  <Label>Slider: {sliderValue[0]}%</Label>
                  <Slider value={sliderValue} onValueChange={setSliderValue} max={100} step={1} />
                </div>
                <div className="space-y-2">
                  <Label>Progress: {progress}%</Label>
                  <Progress value={progress} />
                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => setProgress(Math.max(0, progress - 10))}>-10</Button>
                    <Button size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>+10</Button>
                  </div>
                </div>
              </div>
            </ComponentSection>

            {/* Card */}
            <ComponentSection title="Card">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card description</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Text>Card content here.</Text>
                  </CardContent>
                  <CardFooter>
                    <Button>Action</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>With Avatar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarFallback>DM</AvatarFallback>
                      </Avatar>
                      <div>
                        <Text className="font-medium">Doğukan Metan</Text>
                        <Text size="sm" variant="muted">Developer</Text>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ComponentSection>

            {/* Tabs */}
            <ComponentSection title="Tabs">
              <Tabs defaultValue="tab1" className="max-w-md">
                <TabsList>
                  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                  <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="mt-4">
                  <Text>Content for tab 1</Text>
                </TabsContent>
                <TabsContent value="tab2" className="mt-4">
                  <Text>Content for tab 2</Text>
                </TabsContent>
                <TabsContent value="tab3" className="mt-4">
                  <Text>Content for tab 3</Text>
                </TabsContent>
              </Tabs>
            </ComponentSection>

            {/* Accordion */}
            <ComponentSection title="Accordion">
              <Accordion type="single" collapsible className="max-w-md">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>Yes. WAI-ARIA compliant.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>Yes. Themed by default.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </ComponentSection>

            {/* Dialog & AlertDialog */}
            <ComponentSection title="Dialog & AlertDialog">
              <div className="flex gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Dialog Title</DialogTitle>
                      <DialogDescription>Dialog description here.</DialogDescription>
                    </DialogHeader>
                    <Input placeholder="Input..." />
                    <DialogFooter>
                      <Button variant="outline">Cancel</Button>
                      <Button>Save</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive">Delete</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                      <AlertDialogDescription>This cannot be undone.</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Delete</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </ComponentSection>

            {/* Dropdown, Popover, Tooltip */}
            <ComponentSection title="Dropdown, Popover & Tooltip">
              <div className="flex gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Dropdown</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Popover</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <Text className="font-medium">Popover content</Text>
                  </PopoverContent>
                </Popover>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Tooltip</Button>
                  </TooltipTrigger>
                  <TooltipContent>Tooltip text</TooltipContent>
                </Tooltip>
              </div>
            </ComponentSection>

            {/* Skeleton & ScrollArea */}
            <ComponentSection title="Skeleton & ScrollArea">
              <div className="flex gap-8">
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-4 w-[150px]" />
                  </div>
                </div>
                <ScrollArea className="h-[150px] w-[200px] rounded-md border p-4">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <Text key={i} size="sm" className="py-1">Scroll item {i + 1}</Text>
                  ))}
                </ScrollArea>
              </div>
            </ComponentSection>
          </div>

          {/* Layout Components */}
          <div id="layout" className="space-y-8">
            <Heading as="h2" size="xl">Layout Components</Heading>

            <ComponentSection title="Typography">
              <div className="space-y-4">
                <Heading as="h1" size="2xl">Heading 2XL</Heading>
                <Heading as="h2" size="xl">Heading XL</Heading>
                <Heading as="h3" size="lg">Heading LG</Heading>
                <GradientText>Gradient Text</GradientText>
                <Text>Default text</Text>
                <Text variant="muted">Muted text</Text>
                <Text size="sm">Small text</Text>
              </div>
            </ComponentSection>

            <ComponentSection title="Section">
              <Text size="sm" variant="muted" className="mb-4">
                Section component with variants (default, muted)
              </Text>
              <Section className="border rounded-lg">
                <Text>Default section content</Text>
              </Section>
              <Section variant="muted" className="mt-4 rounded-lg">
                <Text>Muted section content</Text>
              </Section>
            </ComponentSection>

            <ComponentSection title="CenteredLayout">
              <Text size="sm" variant="muted" className="mb-4">
                Used for status pages (404, error, offline, maintenance)
              </Text>
              <div className="border rounded-lg h-[200px] overflow-hidden">
                <CenteredLayout
                  topRight={<Badge>Actions</Badge>}
                  footer={<Text size="sm">Footer</Text>}
                >
                  <Text>Centered content</Text>
                </CenteredLayout>
              </div>
            </ComponentSection>
          </div>

          {/* Content Components */}
          <div id="content" className="space-y-8">
            <Heading as="h2" size="xl">Content Components</Heading>

            <ComponentSection title="Hero">
              <Hero
                badge={<Badge>Available</Badge>}
                title={<GradientText>Hero Title</GradientText>}
                subtitle="Subtitle text here"
                description="Hero description for landing pages"
                actions={
                  <>
                    <Button>Primary</Button>
                    <Button variant="outline">Secondary</Button>
                  </>
                }
              />
            </ComponentSection>

            <ComponentSection title="SectionHeader">
              <SectionHeader
                badge="Badge"
                title="Section Title"
                description="Section description goes here"
              />
            </ComponentSection>

            <ComponentSection title="ProjectCard">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="Project Title"
                  description="Project description here"
                  icon="🚀"
                  tags={['React', 'TypeScript']}
                />
                <ProjectCard
                  title="Another Project"
                  description="Another description"
                  icon="📦"
                  tags={['Node.js', 'AWS']}
                />
              </div>
            </ComponentSection>

            <ComponentSection title="SkillBar">
              <div className="max-w-md space-y-4">
                <SkillBar name="TypeScript" level={90} animate={mounted} />
                <SkillBar name="React" level={85} animate={mounted} />
                <SkillBar name="Node.js" level={80} animate={mounted} />
              </div>
            </ComponentSection>

            <ComponentSection title="TechBadge">
              <div className="flex flex-wrap gap-2">
                <TechBadge>TypeScript</TechBadge>
                <TechBadge>React</TechBadge>
                <TechBadge>Node.js</TechBadge>
                <TechBadge>Docker</TechBadge>
                <TechBadge>Kubernetes</TechBadge>
              </div>
            </ComponentSection>

            <ComponentSection title="StatCard">
              <StatCard
                variant="gradient"
                icon="👨‍💻"
                stats={[
                  { value: '5+', label: 'Years' },
                  { value: '50+', label: 'Projects' },
                ]}
              />
            </ComponentSection>

            <ComponentSection title="SocialLinks">
              <SocialLinks links={socialLinks} />
            </ComponentSection>
          </div>

          {/* Status Components */}
          <div id="status" className="space-y-8">
            <Heading as="h2" size="xl">Status Components</Heading>

            <ComponentSection title="StatusIcon">
              <div className="flex gap-8">
                <div className="text-center">
                  <StatusIcon variant="error">⚠️</StatusIcon>
                  <Text size="sm" className="mt-2">Error</Text>
                </div>
                <div className="text-center">
                  <StatusIcon variant="warning">🔧</StatusIcon>
                  <Text size="sm" className="mt-2">Warning</Text>
                </div>
                <div className="text-center">
                  <StatusIcon variant="success">✓</StatusIcon>
                  <Text size="sm" className="mt-2">Success</Text>
                </div>
              </div>
            </ComponentSection>

            <ComponentSection title="StatusIndicator">
              <StatusIndicator label="In Progress" />
            </ComponentSection>

            <ComponentSection title="BigText">
              <BigText text="404" />
            </ComponentSection>

            <ComponentSection title="ActionButtons">
              <ActionButtons>
                <Button>Primary</Button>
                <Button variant="outline">Secondary</Button>
              </ActionButtons>
            </ComponentSection>

            <ComponentSection title="TipsList">
              <TipsList
                title="Tips:"
                items={['Tip one', 'Tip two', 'Tip three']}
              />
            </ComponentSection>
          </div>

          {/* Utility Components */}
          <div id="utility" className="space-y-8">
            <Heading as="h2" size="xl">Utility Components</Heading>

            <ComponentSection title="TypeWriter">
              <div className="h-8">
                <TypeWriter words={['Developer', 'Designer', 'Creator']} />
              </div>
            </ComponentSection>

            <ComponentSection title="FadeIn">
              <FadeIn delay={0}>
                <Card>
                  <CardContent className="pt-6">
                    <Text>This content fades in on mount</Text>
                  </CardContent>
                </Card>
              </FadeIn>
            </ComponentSection>

            <ComponentSection title="Icons">
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <GitHubIcon className="h-5 w-5" />
                  <Text size="sm">GitHubIcon</Text>
                </div>
                <div className="flex items-center gap-2">
                  <LinkedInIcon className="h-5 w-5" />
                  <Text size="sm">LinkedInIcon</Text>
                </div>
                <div className="flex items-center gap-2">
                  <EmailIcon className="h-5 w-5" />
                  <Text size="sm">EmailIcon</Text>
                </div>
              </div>
            </ComponentSection>
          </div>
        </Container>

        {/* Footer */}
        <Footer
          left={<Copyright name="Portfolio" />}
          right={<Text size="sm" variant="muted">Dev Only</Text>}
        />
      </PageLayout>
    </TooltipProvider>
  );
}
