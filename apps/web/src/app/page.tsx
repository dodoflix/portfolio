'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator,
  ThemeToggle,
} from '@portfolio/ui';

// Animated text component
function TypeWriter({ words, className }: { words: string[]; className?: string }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className={className}>
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
}

// Project data
const projects = [
  {
    title: 'Project Alpha',
    description: 'A modern web application built with Next.js and TypeScript featuring real-time updates and seamless user experience.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    link: '#',
    image: '🚀',
  },
  {
    title: 'Project Beta',
    description: 'Full-stack e-commerce platform with payment integration, inventory management, and analytics dashboard.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    link: '#',
    image: '🛒',
  },
  {
    title: 'Project Gamma',
    description: 'Mobile-first progressive web app with offline support and push notifications for enhanced engagement.',
    tags: ['PWA', 'Service Workers', 'IndexedDB'],
    link: '#',
    image: '📱',
  },
];

// Skills data
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

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-xl font-bold tracking-tight">
            <span className="text-primary">D</span>M
          </Link>
          <div className="flex items-center gap-6">
            <div className="hidden items-center gap-6 sm:flex">
              <Link href="#about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                About
              </Link>
              <Link href="#projects" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Projects
              </Link>
              <Link href="#skills" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Skills
              </Link>
              <Link href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Contact
              </Link>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <div className={`space-y-6 transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Badge variant="outline" className="px-4 py-1">
              Available for work
            </Badge>
            
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
              <span className="block">Hi, I'm</span>
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Dogukan Metan
              </span>
            </h1>

            <div className="h-12 text-xl text-muted-foreground sm:text-2xl">
              {mounted && (
                <TypeWriter
                  words={['Full Stack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Tech Explorer']}
                  className="font-medium"
                />
              )}
            </div>

            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              I craft elegant solutions to complex problems, building modern web applications
              with cutting-edge technologies and a passion for clean, maintainable code.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button size="lg" asChild>
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="h-6 w-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <Badge variant="secondary">About Me</Badge>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Passionate about creating impactful digital experiences
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With over 5 years of experience in software development, I specialize in
                  building scalable web applications that make a difference. My journey began
                  with a curiosity for how things work and evolved into a career dedicated to
                  crafting exceptional user experiences.
                </p>
                <p>
                  I believe in writing clean, maintainable code and staying up-to-date with
                  the latest technologies. When I'm not coding, you'll find me exploring new
                  frameworks, contributing to open source, or sharing knowledge with the
                  developer community.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.slice(0, 8).map((tech) => (
                  <Badge key={tech} variant="outline">{tech}</Badge>
                ))}
                <Badge variant="outline">+{techStack.length - 8} more</Badge>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-8">
                <div className="flex h-full flex-col items-center justify-center space-y-4 rounded-xl border bg-card/50 backdrop-blur">
                  <div className="text-8xl">👨‍💻</div>
                  <div className="text-center">
                    <p className="text-2xl font-bold">5+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                  <Separator className="w-1/2" />
                  <div className="text-center">
                    <p className="text-2xl font-bold">50+</p>
                    <p className="text-sm text-muted-foreground">Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-muted/30 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <Badge variant="secondary">Projects</Badge>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Featured Work
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A selection of projects I've worked on recently
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={project.title} className="group overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-4xl transition-transform group-hover:scale-110">
                    {project.image}
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              View All Projects
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <Badge variant="secondary">Skills</Badge>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Technical Expertise
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-1000"
                      style={{ width: mounted ? `${skill.level}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap content-start gap-3">
              {techStack.map((tech) => (
                <div
                  key={tech}
                  className="rounded-lg border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-muted/30 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary">Contact</Badge>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Let's Work Together
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Have a project in mind? I'd love to hear about it. Drop me a message
              and let's create something amazing together.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <a href="mailto:hello@example.com">
                  <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Email
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Dogukan Metan. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
