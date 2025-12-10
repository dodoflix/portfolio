'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import {
  Badge,
  Button,
  LanguageSwitcher,
  ThemeToggle,
  PageLayout,
  Section,
  Navbar,
  NavLink,
  Logo,
  Footer,
  Copyright,
  Hero,
  SectionHeader,
  ProjectCard,
  SkillBar,
  TechBadge,
  StatCard,
  TypeWriter,
  FadeIn,
  Heading,
  GradientText,
  Text,
  SocialLinks,
  GitHubIcon,
  LinkedInIcon,
  EmailIcon,
} from '@portfolio/ui';

// Skills data (not translated - technical terms)
const skills = [
  { name: 'TypeScript', level: 95 },
  { name: 'React / Next.js', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'PostgreSQL', level: 80 },
  { name: 'Docker', level: 75 },
];

const techStack = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'NestJS',
  'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS',
  'Git', 'GraphQL', 'REST APIs', 'Nx Monorepo',
];

const projectImages = ['🚀', '🛒', '📱'];
const projectTags = [
  ['Next.js', 'TypeScript', 'Tailwind'],
  ['React', 'Node.js', 'PostgreSQL'],
  ['PWA', 'Service Workers', 'IndexedDB'],
];

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    setMounted(true);
  }, []);

  const roles = [
    t('hero.roles.developer'),
    t('hero.roles.designer'),
    t('hero.roles.solver'),
    t('hero.roles.explorer'),
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

  const socialLinks = [
    {
      name: t('contact.email'),
      href: 'mailto:hello@example.com',
      icon: <EmailIcon />,
    },
    {
      name: t('contact.github'),
      href: 'https://github.com',
      icon: <GitHubIcon />,
    },
    {
      name: t('contact.linkedin'),
      href: 'https://linkedin.com',
      icon: <LinkedInIcon />,
    },
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
      >
        <NavLink href="#about">{t('nav.about')}</NavLink>
        <NavLink href="#projects">{t('nav.projects')}</NavLink>
        <NavLink href="#skills">{t('nav.skills')}</NavLink>
        <NavLink href="#contact">{t('nav.contact')}</NavLink>
      </Navbar>

      {/* Hero Section */}
      <Hero
        badge={
          <Badge variant="outline" className="px-4 py-1">
            {t('hero.badge')}
          </Badge>
        }
        title={
          <FadeIn delay={100} duration={1000}>
            <span className="block">{t('hero.greeting')}</span>
            <GradientText>{t('hero.name')}</GradientText>
          </FadeIn>
        }
        subtitle={
          mounted && <TypeWriter words={roles} />
        }
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
      />

      {/* About Section */}
      <Section id="about">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <Badge variant="secondary">{t('about.badge')}</Badge>
            <Heading as="h2" size="xl">
              {t('about.title')}
            </Heading>
            <div className="space-y-4">
              <Text variant="muted">{t('about.description1')}</Text>
              <Text variant="muted">{t('about.description2')}</Text>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.slice(0, 8).map((tech) => (
                <Badge key={tech} variant="outline">{tech}</Badge>
              ))}
              <Badge variant="outline">{t('about.more', { count: techStack.length - 8 })}</Badge>
            </div>
          </div>

          <StatCard
            variant="gradient"
            icon="👨‍💻"
            stats={[
              { value: '5+', label: t('about.yearsExperience') },
              { value: '50+', label: t('about.projectsCompleted') },
            ]}
          />
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" variant="muted">
        <SectionHeader
          badge={t('projects.badge')}
          title={t('projects.title')}
          description={t('projects.description')}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
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
        <SectionHeader
          badge={t('skills.badge')}
          title={t('skills.title')}
          description={t('skills.description')}
        />

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            {skills.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                animate={mounted}
              />
            ))}
          </div>

          <div className="flex flex-wrap content-start gap-3">
            {techStack.map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" variant="muted">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeader
            badge={t('contact.badge')}
            title={t('contact.title')}
            description={t('contact.description')}
          />

          <SocialLinks links={socialLinks} variant="default" />
        </div>
      </Section>

      {/* Footer */}
      <Footer
        left={
          <>
            <Copyright name={t('hero.name')} /> {t('footer.rights')}
          </>
        }
        right={
          <>
            <NavLink href="#">{t('footer.privacy')}</NavLink>
            <NavLink href="#">{t('footer.terms')}</NavLink>
          </>
        }
      />
    </PageLayout>
  );
}
