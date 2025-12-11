'use client';

import { useState } from 'react';
import {
  // Core UI Components
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
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  // Core Primitives
  VStack,
  HStack,
  Cluster,
  Container,
  FullCenter,
  Spacer,
  // Core Atoms
  LanguageSwitcher,
  ThemeToggle,
  Heading,
  Text,
  GradientText,
  TypeWriter,
  FadeIn,
  LabeledProgress,
  StatValue,
  IconBox,
  LinkButton,
  GitHubIcon,
  LinkedInIcon,
  EmailIcon,
  // Core Decorative
  GradientBlob,
  ScrollIndicator,
  DecorativeText,
  AnimatedLine,
  // Components
  PageLayout,
  Navbar,
  NavLink,
  Logo,
  Footer,
  Copyright,
  // Compositions
  HeroSection,
  FeatureCard,
  StatsGrid,
  StatusPage,
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
          <NavLink href="#core">Core</NavLink>
          <NavLink href="#primitives">Primitives</NavLink>
          <NavLink href="#atoms">Atoms</NavLink>
          <NavLink href="#decorative">Decorative</NavLink>
          <NavLink href="#compositions">Compositions</NavLink>
        </Navbar>

        {/* Main Content */}
        <Container size="lg" padded className="py-8 space-y-12">
          <FadeIn>
            <VStack gap={2} align="start">
              <Heading as="h1" size="2xl">Component Library</Heading>
              <Text variant="muted">All available components in the UI library</Text>
            </VStack>
          </FadeIn>

          {/* Core UI Components */}
          <div id="core" className="space-y-8">
            <Heading as="h2" size="xl">Core UI Components</Heading>

            {/* Buttons */}
            <ComponentSection title="Button">
              <Cluster gap={4}>
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </Cluster>
              <Separator className="my-4" />
              <Cluster gap={4}>
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">+</Button>
                <Button disabled>Disabled</Button>
              </Cluster>
            </ComponentSection>

            {/* Badge */}
            <ComponentSection title="Badge">
              <Cluster gap={4}>
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </Cluster>
            </ComponentSection>

            {/* Input & Textarea */}
            <ComponentSection title="Input & Textarea">
              <VStack gap={4} className="max-w-md">
                <VStack gap={2} align="start">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </VStack>
                <VStack gap={2} align="start">
                  <Label htmlFor="disabled">Disabled</Label>
                  <Input id="disabled" disabled placeholder="Disabled input" />
                </VStack>
                <VStack gap={2} align="start">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Type your message..." />
                </VStack>
              </VStack>
            </ComponentSection>

            {/* Checkbox & Switch */}
            <ComponentSection title="Checkbox & Switch">
              <VStack gap={6} align="start">
                <HStack gap={2}>
                  <Checkbox id="terms" checked={checked} onCheckedChange={(c) => setChecked(c as boolean)} />
                  <Label htmlFor="terms">Accept terms</Label>
                </HStack>
                <HStack gap={2}>
                  <Switch id="airplane" checked={switchOn} onCheckedChange={setSwitchOn} />
                  <Label htmlFor="airplane">Airplane Mode</Label>
                </HStack>
              </VStack>
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
              <VStack gap={8} className="max-w-md">
                <VStack gap={2} align="start" className="w-full">
                  <Label>Slider: {sliderValue[0]}%</Label>
                  <Slider value={sliderValue} onValueChange={setSliderValue} max={100} step={1} />
                </VStack>
                <VStack gap={2} align="start" className="w-full">
                  <Label>Progress: {progress}%</Label>
                  <Progress value={progress} />
                  <HStack gap={2}>
                    <Button size="sm" onClick={() => setProgress(Math.max(0, progress - 10))}>-10</Button>
                    <Button size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>+10</Button>
                  </HStack>
                </VStack>
              </VStack>
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
                    <HStack gap={4}>
                      <Avatar>
                        <AvatarFallback>DM</AvatarFallback>
                      </Avatar>
                      <VStack gap={0} align="start">
                        <Text className="font-medium">Doğukan Metan</Text>
                        <Text size="sm" variant="muted">Developer</Text>
                      </VStack>
                    </HStack>
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
              <HStack gap={4}>
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
              </HStack>
            </ComponentSection>

            {/* Dropdown, Popover, Tooltip */}
            <ComponentSection title="Dropdown, Popover & Tooltip">
              <HStack gap={4}>
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
              </HStack>
            </ComponentSection>

            {/* Skeleton & ScrollArea */}
            <ComponentSection title="Skeleton & ScrollArea">
              <HStack gap={8}>
                <HStack gap={4}>
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <VStack gap={2}>
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-4 w-[150px]" />
                  </VStack>
                </HStack>
                <ScrollArea className="h-[150px] w-[200px] rounded-md border p-4">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <Text key={i} size="sm" className="py-1">Scroll item {i + 1}</Text>
                  ))}
                </ScrollArea>
              </HStack>
            </ComponentSection>
          </div>

          {/* Primitives */}
          <div id="primitives" className="space-y-8">
            <Heading as="h2" size="xl">Layout Primitives</Heading>

            <ComponentSection title="VStack & HStack">
              <HStack gap={8}>
                <VStack gap={2} className="p-4 border rounded">
                  <Badge>Item 1</Badge>
                  <Badge>Item 2</Badge>
                  <Badge>Item 3</Badge>
                </VStack>
                <HStack gap={2} className="p-4 border rounded">
                  <Badge>Item 1</Badge>
                  <Badge>Item 2</Badge>
                  <Badge>Item 3</Badge>
                </HStack>
              </HStack>
            </ComponentSection>

            <ComponentSection title="Cluster (Auto-wrap)">
              <Cluster gap={2}>
                {Array.from({ length: 12 }).map((_, i) => (
                  <Badge key={i}>Tag {i + 1}</Badge>
                ))}
              </Cluster>
            </ComponentSection>

            <ComponentSection title="FullCenter">
              <div className="h-[200px] border rounded">
                <FullCenter>
                  <Text>Centered content</Text>
                </FullCenter>
              </div>
            </ComponentSection>

            <ComponentSection title="Spacer">
              <HStack>
                <Badge>Left</Badge>
                <Spacer />
                <Badge>Right</Badge>
              </HStack>
            </ComponentSection>
          </div>

          {/* Atoms */}
          <div id="atoms" className="space-y-8">
            <Heading as="h2" size="xl">Atomic Components</Heading>

            <ComponentSection title="Typography">
              <VStack gap={4} align="start">
                <Heading as="h1" size="2xl">Heading 2XL</Heading>
                <Heading as="h2" size="xl">Heading XL</Heading>
                <Heading as="h3" size="lg">Heading LG</Heading>
                <GradientText>Gradient Text</GradientText>
                <Text>Default text</Text>
                <Text variant="muted">Muted text</Text>
                <Text size="sm">Small text</Text>
              </VStack>
            </ComponentSection>

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

            <ComponentSection title="LabeledProgress">
              <VStack gap={4} className="max-w-md">
                <LabeledProgress label="TypeScript" value={90} animate={mounted} />
                <LabeledProgress label="React" value={85} animate={mounted} />
                <LabeledProgress label="Node.js" value={80} animate={mounted} />
              </VStack>
            </ComponentSection>

            <ComponentSection title="StatValue">
              <HStack gap={8}>
                <StatValue value="5+" label="Years Experience" />
                <StatValue value="50+" label="Projects" size="lg" />
              </HStack>
            </ComponentSection>

            <ComponentSection title="IconBox">
              <HStack gap={4}>
                <IconBox icon="🚀" size="sm" />
                <IconBox icon="🔧" size="md" />
                <IconBox icon="⚡" size="lg" variant="outline" />
                <IconBox icon="📦" size="xl" variant="ghost" />
              </HStack>
            </ComponentSection>

            <ComponentSection title="LinkButton">
              <HStack gap={4}>
                <LinkButton href="mailto:test@example.com" iconBefore={<EmailIcon />}>
                  Email
                </LinkButton>
                <LinkButton href="https://github.com" variant="outline" iconBefore={<GitHubIcon />} external>
                  GitHub
                </LinkButton>
                <LinkButton href="https://linkedin.com" variant="ghost" iconBefore={<LinkedInIcon />} external>
                  LinkedIn
                </LinkButton>
              </HStack>
            </ComponentSection>

            <ComponentSection title="Icons">
              <HStack gap={4}>
                <HStack gap={2}>
                  <GitHubIcon className="h-5 w-5" />
                  <Text size="sm">GitHubIcon</Text>
                </HStack>
                <HStack gap={2}>
                  <LinkedInIcon className="h-5 w-5" />
                  <Text size="sm">LinkedInIcon</Text>
                </HStack>
                <HStack gap={2}>
                  <EmailIcon className="h-5 w-5" />
                  <Text size="sm">EmailIcon</Text>
                </HStack>
              </HStack>
            </ComponentSection>
          </div>

          {/* Decorative */}
          <div id="decorative" className="space-y-8">
            <Heading as="h2" size="xl">Decorative Components</Heading>

            <ComponentSection title="DecorativeText">
              <div className="relative h-32">
                <DecorativeText text="404" />
              </div>
            </ComponentSection>

            <ComponentSection title="GradientBlob">
              <div className="relative h-[200px] border rounded overflow-hidden">
                <GradientBlob 
                  color="primary"
                  size="lg"
                  position="center"
                  animate
                />
                <FullCenter className="relative z-10">
                  <Text>Content over gradient blob</Text>
                </FullCenter>
              </div>
            </ComponentSection>

            <ComponentSection title="AnimatedLine">
              <VStack gap={4}>
                <AnimatedLine direction="horizontal" length="lg" />
                <HStack gap={4} className="h-20">
                  <AnimatedLine direction="vertical" length="lg" />
                  <AnimatedLine direction="vertical" length="md" />
                </HStack>
              </VStack>
            </ComponentSection>

            <ComponentSection title="ScrollIndicator">
              <div className="h-[100px] border rounded flex items-end justify-center pb-4">
                <ScrollIndicator />
              </div>
            </ComponentSection>
          </div>

          {/* Compositions */}
          <div id="compositions" className="space-y-8">
            <Heading as="h2" size="xl">Compositions</Heading>

            <ComponentSection title="HeroSection">
              <HeroSection
                badge={<Badge>Available</Badge>}
                headline={<GradientText>Hero Title</GradientText>}
                subheadline="Subtitle text here"
                description="Hero description for landing pages"
                actions={
                  <>
                    <Button>Primary</Button>
                    <Button variant="outline">Secondary</Button>
                  </>
                }
              />
            </ComponentSection>

            <ComponentSection title="FeatureCard">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <FeatureCard
                  title="Feature Title"
                  description="Feature description here"
                  icon="🚀"
                  tags={['React', 'TypeScript']}
                />
                <FeatureCard
                  title="Another Feature"
                  description="Another description"
                  icon="📦"
                  tags={['Node.js', 'AWS']}
                />
              </div>
            </ComponentSection>

            <ComponentSection title="StatsGrid">
              <StatsGrid
                stats={[
                  { value: '5+', label: 'Years' },
                  { value: '50+', label: 'Projects' },
                  { value: '99%', label: 'Uptime' },
                ]}
              />
            </ComponentSection>

            <ComponentSection title="StatusPage">
              <div className="border rounded h-[300px] overflow-hidden">
                <StatusPage
                  code="404"
                  title="Page Not Found"
                  description="The page you're looking for doesn't exist."
                  actions={
                    <>
                      <Button size="sm">Go Home</Button>
                      <Button size="sm" variant="outline">Go Back</Button>
                    </>
                  }
                />
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
