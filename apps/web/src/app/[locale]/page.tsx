'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import {
  // Core UI
  Badge,
  Button,
  Card,
  Separator,
  // Core Primitives
  VStack,
  Cluster,
  Container,
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
  // Core Hooks
  useScrollSpy,
  // Components
  PageLayout,
  Section,
  Navbar,
  Logo,
  Footer,
  Copyright,
  // Compositions
  HeroSection,
  FeatureCard,
  SectionNav,
} from '@portfolio/ui';

// Skills data (not translated - technical terms)
const skills = [
  { name: 'Kubernetes', level: 90 },
  { name: 'AWS / Cloud', level: 90 },
  { name: 'Docker', level: 95 },
  { name: 'TypeScript / Node.js', level: 85 },
  { name: 'CI/CD Pipelines', level: 90 },
  { name: 'Software Architecture', level: 85 },
];

const techStack = [
  'Kubernetes', 'Docker', 'AWS', 'Terraform', 'Linux',
  'TypeScript', 'Node.js', 'NestJS', 'React', 'Next.js',
  'PostgreSQL', 'MongoDB', 'Redis', 'Nginx',
  'GitHub Actions', 'GitLab CI', 'Prometheus', 'Grafana',
];

const projectImages = ['🔗', '📦', '🏗️'];
const projectTags = [
  ['Shopify', 'Integration', 'Cloud'],
  ['Node.js', 'On-Premise', 'WMS'],
  ['DevOps', 'CI/CD', 'Infrastructure'],
];

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const t = useTranslations();

  const sectionIds = ['about', 'projects', 'skills', 'contact'];
  const { activeId, scrollTo } = useScrollSpy({ sectionIds });

  useEffect(() => {
    setMounted(true);
  }, []);

  const roles = [
    t('hero.roles.software'),
    t('hero.roles.devops'),
    t('hero.roles.architect'),
    t('hero.roles.cloud'),
  ];

  const projects = [
    {
      key: 'alpha',
      title: t('projects.items.alpha.title'),
      description: t('projects.items.alpha.description'),
      tags: projectTags[0],
      image: projectImages[0],
    },
    {
      key: 'beta',
      title: t('projects.items.beta.title'),
      description: t('projects.items.beta.description'),
      tags: projectTags[1],
      image: projectImages[1],
    },
    {
      key: 'gamma',
      title: t('projects.items.gamma.title'),
      description: t('projects.items.gamma.description'),
      tags: projectTags[2],
      image: projectImages[2],
    },
  ];

  const navSections = [
    { id: 'about', label: t('nav.about') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'contact', label: t('nav.contact') },
  ];

  return (
    <PageLayout>
      {/* Navigation */}
      <Navbar
        logo={<Logo href="/" />}
        actions={
          <>
            <LanguageSwitcher />
            <ThemeToggle />
          </>
        }
      />

      {/* Vertical Side Navigation */}
      <SectionNav
        sections={navSections}
        activeId={activeId}
        onSelect={scrollTo}
      />

      {/* Hero Section */}
      <HeroSection
        badge={
          <Badge variant="outline" className="px-4 py-1">
            {t('hero.badge')}
          </Badge>
        }
        headline={
          <FadeIn delay={100} duration={1000}>
            <span className="block">{t('hero.greeting')}</span>
            <GradientText>{t('hero.name')}</GradientText>
          </FadeIn>
        }
        subheadline={mounted && <TypeWriter words={roles} />}
        description={t('hero.description')}
        actions={
          <>
            <Button size="lg" asChild>
              <Link href="#projects">{t('hero.cta.work')}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">{t('hero.cta.contact')}</Link>
            </Button>
          </>
        }
        scrollTarget="about"
      />

      {/* About Section */}
      <Section id="about">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <VStack gap={6} align="start">
            <Badge variant="secondary">{t('about.badge')}</Badge>
            <Heading as="h2" size="xl">
              {t('about.title')}
            </Heading>
            <VStack gap={4}>
              <Text variant="muted">{t('about.description1')}</Text>
              <Text variant="muted">{t('about.description2')}</Text>
            </VStack>
            <Cluster gap={2}>
              {techStack.slice(0, 8).map((tech) => (
                <Badge key={tech} variant="outline">{tech}</Badge>
              ))}
              <Badge variant="outline">{t('about.more', { count: techStack.length - 8 })}</Badge>
            </Cluster>
          </VStack>

          <Card className="aspect-square overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-8">
            <div className="flex h-full flex-col items-center justify-center space-y-4 rounded-xl border bg-card/50 backdrop-blur">
              <IconBox icon="👨‍💻" size="xl" variant="ghost" />
              <StatValue value="5+" label={t('about.yearsExperience')} size="lg" />
              <Separator className="w-1/2" />
              <StatValue value="50+" label={t('about.projectsCompleted')} size="lg" />
            </div>
          </Card>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" variant="muted">
        <VStack gap={4} align="center" className="mb-12">
          <Badge variant="secondary">{t('projects.badge')}</Badge>
          <Heading as="h2" size="xl" className="text-center">
            {t('projects.title')}
          </Heading>
          <Text variant="muted" className="text-center max-w-2xl">
            {t('projects.description')}
          </Text>
        </VStack>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <FeatureCard
              key={project.key}
              title={project.title}
              description={project.description}
              icon={project.image}
              tags={project.tags}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            {t('projects.viewAll')}
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <VStack gap={4} align="center" className="mb-12">
          <Badge variant="secondary">{t('skills.badge')}</Badge>
          <Heading as="h2" size="xl" className="text-center">
            {t('skills.title')}
          </Heading>
          <Text variant="muted" className="text-center max-w-2xl">
            {t('skills.description')}
          </Text>
        </VStack>

        <div className="grid gap-8 md:grid-cols-2">
          <VStack gap={6}>
            {skills.map((skill) => (
              <LabeledProgress
                key={skill.name}
                label={skill.name}
                value={skill.level}
                animate={mounted}
              />
            ))}
          </VStack>

          <Cluster gap={3} align="start">
            {techStack.map((tech) => (
              <Badge 
                key={tech} 
                variant="outline"
                className="px-4 py-2 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {tech}
              </Badge>
            ))}
          </Cluster>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" variant="muted">
        <Container size="sm" className="text-center">
          <VStack gap={4} align="center" className="mb-8">
            <Badge variant="secondary">{t('contact.badge')}</Badge>
            <Heading as="h2" size="xl">
              {t('contact.title')}
            </Heading>
            <Text variant="muted">
              {t('contact.description')}
            </Text>
          </VStack>

          <Cluster gap={4} justify="center">
            <LinkButton href="mailto:dogukanmetan@gmail.com" iconBefore={<EmailIcon />} external>
              {t('contact.email')}
            </LinkButton>
            <LinkButton href="https://github.com/dodoflix" variant="outline" iconBefore={<GitHubIcon />} external>
              {t('contact.github')}
            </LinkButton>
            <LinkButton href="https://linkedin.com/in/dogukan-metan" variant="outline" iconBefore={<LinkedInIcon />} external>
              {t('contact.linkedin')}
            </LinkButton>
          </Cluster>
        </Container>
      </Section>

      {/* Footer */}
      <Footer
        left={
          <>
            <Copyright name={t('hero.name')} /> {t('footer.rights')}
          </>
        }
      />
    </PageLayout>
  );
}
