/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

/**
 * Mock UI Components for testing
 * These simplified versions don't rely on external dependencies like next-intl or Radix UI
 */

// ==================== Base UI Components ====================

// Button
export const Button = ({ children, onClick, asChild, ...props }: any) => {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, { onClick, ...props });
  }
  return <button onClick={onClick} {...props}>{children}</button>;
};

// Badge
export const Badge = ({ children, variant, ...props }: any) => (
  <span data-variant={variant} data-testid="badge" {...props}>{children}</span>
);

// Card components
export const Card = ({ children, ...props }: any) => (
  <div data-testid="card" {...props}>{children}</div>
);
export const CardHeader = ({ children, ...props }: any) => (
  <div data-testid="card-header" {...props}>{children}</div>
);
export const CardTitle = ({ children, ...props }: any) => (
  <h3 data-testid="card-title" {...props}>{children}</h3>
);
export const CardDescription = ({ children, ...props }: any) => (
  <p data-testid="card-description" {...props}>{children}</p>
);
export const CardContent = ({ children, ...props }: any) => (
  <div data-testid="card-content" {...props}>{children}</div>
);
export const CardFooter = ({ children, ...props }: any) => (
  <div data-testid="card-footer" {...props}>{children}</div>
);

// Separator
export const Separator = ({ orientation, ...props }: any) => (
  <hr data-orientation={orientation} data-testid="separator" {...props} />
);

// Theme components
export const ThemeToggle = () => (
  <button data-testid="theme-toggle">Toggle Theme</button>
);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <div data-testid="theme-provider">{children}</div>
);

// Language Switcher
export const LanguageSwitcher = () => (
  <button data-testid="language-switcher">Switch Language</button>
);

// Form components
export const Input = (props: any) => <input data-testid="input" {...props} />;
export const Textarea = (props: any) => <textarea data-testid="textarea" {...props} />;
export const Label = ({ children, ...props }: any) => (
  <label data-testid="label" {...props}>{children}</label>
);

export const Checkbox = ({ onCheckedChange, checked, ...props }: any) => (
  <input
    type="checkbox"
    data-testid="checkbox"
    checked={checked}
    onChange={(e) => onCheckedChange?.(e.target.checked)}
    {...props}
  />
);

export const Switch = ({ onCheckedChange, checked, ...props }: any) => (
  <input
    type="checkbox"
    role="switch"
    data-testid="switch"
    checked={checked}
    onChange={(e) => onCheckedChange?.(e.target.checked)}
    {...props}
  />
);

// Select components
export const Select = ({ children }: any) => (
  <div data-testid="select">{children}</div>
);
export const SelectTrigger = ({ children }: any) => (
  <button data-testid="select-trigger">{children}</button>
);
export const SelectValue = ({ placeholder }: any) => (
  <span data-testid="select-value">{placeholder}</span>
);
export const SelectContent = ({ children }: any) => (
  <div data-testid="select-content">{children}</div>
);
export const SelectItem = ({ children, value }: any) => (
  <div data-testid="select-item" data-value={value}>{children}</div>
);

// Slider & Progress
export const Slider = ({ value, onValueChange, ...props }: any) => (
  <input
    type="range"
    data-testid="slider"
    value={value?.[0]}
    onChange={(e) => onValueChange?.([Number(e.target.value)])}
    {...props}
  />
);

export const Progress = ({ value, ...props }: any) => (
  <div role="progressbar" data-testid="progress" aria-valuenow={value} {...props} />
);

// Tabs components
export const Tabs = ({ children, defaultValue }: any) => (
  <div data-testid="tabs" data-value={defaultValue}>{children}</div>
);
export const TabsList = ({ children }: any) => (
  <div role="tablist" data-testid="tabs-list">{children}</div>
);
export const TabsTrigger = ({ children, value }: any) => (
  <button role="tab" data-testid="tabs-trigger" data-value={value}>{children}</button>
);
export const TabsContent = ({ children, value }: any) => (
  <div role="tabpanel" data-testid="tabs-content" data-value={value}>{children}</div>
);

// Accordion components
export const Accordion = ({ children }: any) => (
  <div data-testid="accordion">{children}</div>
);
export const AccordionItem = ({ children, value }: any) => (
  <div data-testid="accordion-item" data-value={value}>{children}</div>
);
export const AccordionTrigger = ({ children }: any) => (
  <button data-testid="accordion-trigger">{children}</button>
);
export const AccordionContent = ({ children }: any) => (
  <div data-testid="accordion-content">{children}</div>
);

// Dialog components
export const Dialog = ({ children }: any) => (
  <div data-testid="dialog">{children}</div>
);
export const DialogTrigger = ({ children, asChild }: any) => (
  asChild ? children : <button data-testid="dialog-trigger">{children}</button>
);
export const DialogContent = ({ children }: any) => (
  <div role="dialog" data-testid="dialog-content">{children}</div>
);
export const DialogHeader = ({ children }: any) => (
  <div data-testid="dialog-header">{children}</div>
);
export const DialogTitle = ({ children }: any) => (
  <h2 data-testid="dialog-title">{children}</h2>
);
export const DialogDescription = ({ children }: any) => (
  <p data-testid="dialog-description">{children}</p>
);
export const DialogFooter = ({ children }: any) => (
  <div data-testid="dialog-footer">{children}</div>
);

// AlertDialog (same as Dialog)
export const AlertDialog = Dialog;
export const AlertDialogTrigger = DialogTrigger;
export const AlertDialogContent = DialogContent;
export const AlertDialogHeader = DialogHeader;
export const AlertDialogTitle = DialogTitle;
export const AlertDialogDescription = DialogDescription;
export const AlertDialogFooter = DialogFooter;
export const AlertDialogAction = Button;
export const AlertDialogCancel = Button;

// Dropdown Menu components
export const DropdownMenu = ({ children }: any) => (
  <div data-testid="dropdown-menu">{children}</div>
);
export const DropdownMenuTrigger = ({ children, asChild }: any) => (
  asChild ? children : <button data-testid="dropdown-menu-trigger">{children}</button>
);
export const DropdownMenuContent = ({ children }: any) => (
  <div data-testid="dropdown-menu-content">{children}</div>
);
export const DropdownMenuItem = ({ children, onClick }: any) => (
  <div role="menuitem" data-testid="dropdown-menu-item" onClick={onClick}>{children}</div>
);
export const DropdownMenuLabel = ({ children }: any) => (
  <div data-testid="dropdown-menu-label">{children}</div>
);
export const DropdownMenuSeparator = () => (
  <hr data-testid="dropdown-menu-separator" />
);

// Popover components
export const Popover = ({ children }: any) => (
  <div data-testid="popover">{children}</div>
);
export const PopoverTrigger = ({ children, asChild }: any) => (
  asChild ? children : <button data-testid="popover-trigger">{children}</button>
);
export const PopoverContent = ({ children }: any) => (
  <div data-testid="popover-content">{children}</div>
);

// Tooltip components
export const Tooltip = ({ children }: any) => (
  <div data-testid="tooltip">{children}</div>
);
export const TooltipTrigger = ({ children, asChild }: any) => (
  asChild ? children : <button data-testid="tooltip-trigger">{children}</button>
);
export const TooltipContent = ({ children }: any) => (
  <div data-testid="tooltip-content">{children}</div>
);
export const TooltipProvider = ({ children }: any) => (
  <div data-testid="tooltip-provider">{children}</div>
);

// Scroll Area
export const ScrollArea = ({ children, className }: any) => (
  <div data-testid="scroll-area" className={className}>{children}</div>
);

// Avatar components
export const Avatar = ({ children }: any) => (
  <div data-testid="avatar">{children}</div>
);
export const AvatarImage = ({ src, alt }: any) => (
  <img data-testid="avatar-image" src={src} alt={alt} />
);
export const AvatarFallback = ({ children }: any) => (
  <span data-testid="avatar-fallback">{children}</span>
);

// Skeleton
export const Skeleton = ({ className, ...props }: any) => (
  <div data-testid="skeleton" className={`animate-pulse ${className || ''}`} {...props} />
);

// ==================== Layout Components ====================

export const Container = ({ children, ...props }: any) => (
  <div data-testid="container" {...props}>{children}</div>
);

export const Section = ({ children, id, ...props }: any) => (
  <section data-testid="section" id={id} {...props}>{children}</section>
);

export const PageLayout = ({ children, ...props }: any) => (
  <div data-testid="page-layout" {...props}>{children}</div>
);

export const CenteredLayout = ({ children, topRight, footer, ...props }: any) => (
  <div data-testid="centered-layout" {...props}>
    {topRight && <div data-testid="top-right">{topRight}</div>}
    {children}
    {footer && <div data-testid="footer">{footer}</div>}
  </div>
);

// ==================== Typography Components ====================

export const Heading = ({ children, as: Tag = 'h2', ...props }: any) => (
  <Tag data-testid="heading" {...props}>{children}</Tag>
);

export const Text = ({ children, as: Tag = 'p', ...props }: any) => (
  <Tag data-testid="text" {...props}>{children}</Tag>
);

export const GradientText = ({ children, ...props }: any) => (
  <span data-testid="gradient-text" {...props}>{children}</span>
);

// ==================== Navigation Components ====================

export const Navbar = ({ children, logo, actions, ...props }: any) => (
  <nav data-testid="navbar" {...props}>
    {logo}
    {children}
    {actions}
  </nav>
);

export const NavLink = ({ children, href, ...props }: any) => (
  <a data-testid="nav-link" href={href} {...props}>{children}</a>
);

export const Footer = ({ children, left, right, ...props }: any) => (
  <footer data-testid="footer" {...props}>
    {left}
    {children}
    {right}
  </footer>
);

export const Logo = ({ primary, secondary, ...props }: any) => (
  <a data-testid="logo" {...props}>
    <span>{primary || 'D'}</span>{secondary || 'M'}
  </a>
);

export const Copyright = ({ name }: any) => (
  <span data-testid="copyright">© {new Date().getFullYear()} {name}</span>
);

// ==================== Content Components ====================

export const SectionHeader = ({ title, badge, description, children, ...props }: any) => (
  <div data-testid="section-header" {...props}>
    {badge && <span data-testid="badge">{badge}</span>}
    <h2>{title}</h2>
    {description && <p>{description}</p>}
    {children}
  </div>
);

export const Hero = ({ title, subtitle, description, badge, actions, children, ...props }: any) => (
  <section data-testid="hero" {...props}>
    {badge}
    <h1>{title}</h1>
    {subtitle}
    {description && <p>{description}</p>}
    {actions}
    {children}
  </section>
);

export const ProjectCard = ({ title, description, icon, tags, ...props }: any) => (
  <div data-testid="project-card" {...props}>
    {icon && <div>{icon}</div>}
    <h3>{title}</h3>
    <p>{description}</p>
    {tags?.map((tag: string) => <span key={tag}>{tag}</span>)}
  </div>
);

export const SkillBar = ({ name, level, ...props }: any) => (
  <div data-testid="skill-bar" {...props}>
    <span>{name}</span>
    <div style={{ width: `${level}%` }} />
  </div>
);

export const TechBadge = ({ children, ...props }: any) => (
  <div data-testid="tech-badge" {...props}>{children}</div>
);

export const StatCard = ({ stats, icon, ...props }: any) => (
  <div data-testid="stat-card" {...props}>
    {icon}
    {stats?.map((stat: any) => (
      <div key={stat.label}>
        <span>{stat.value}</span>
        <span>{stat.label}</span>
      </div>
    ))}
  </div>
);

// ==================== Status Components ====================

export const StatusIcon = ({ children, variant, ...props }: any) => (
  <div data-testid="status-icon" data-variant={variant} {...props}>{children}</div>
);

export const StatusIndicator = ({ label, variant, ...props }: any) => (
  <div data-testid="status-indicator" data-variant={variant} {...props}>{label}</div>
);

export const BigText = ({ text, children, ...props }: any) => (
  <div data-testid="big-text" {...props}>
    <span>{text}</span>
    {children}
  </div>
);

export const ActionButtons = ({ children, ...props }: any) => (
  <div data-testid="action-buttons" {...props}>{children}</div>
);

// ==================== Utility Components ====================

export const TypeWriter = ({ words, ...props }: any) => (
  <span data-testid="typewriter" {...props}>{words?.[0] || ''}</span>
);

export const SocialLinks = ({ links, ...props }: any) => (
  <div data-testid="social-links" {...props}>
    {links?.map((link: any) => (
      <a key={link.name} href={link.href}>{link.name}</a>
    ))}
  </div>
);

export const Icon = ({ children, size, ...props }: any) => (
  <svg data-testid="icon" data-size={size} {...props}>{children}</svg>
);

export const Icons = {
  email: null,
  arrowRight: null,
  arrowDown: null,
  warning: null,
  settings: null,
  wifi: null,
  wifiOff: null,
};

export const GitHubIcon = ({ className }: any) => (
  <svg data-testid="github-icon" className={className} />
);

export const LinkedInIcon = ({ className }: any) => (
  <svg data-testid="linkedin-icon" className={className} />
);

export const EmailIcon = ({ className }: any) => (
  <svg data-testid="email-icon" className={className} />
);

export const TipsList = ({ title, items, ...props }: any) => (
  <div data-testid="tips-list" {...props}>
    <h3>{title}</h3>
    <ul>
      {items?.map((item: string, i: number) => <li key={i}>{item}</li>)}
    </ul>
  </div>
);

export const FadeIn = ({ children, ...props }: any) => (
  <div data-testid="fade-in" {...props}>{children}</div>
);

// Utility function
export const cn = (...classes: (string | undefined | null | false)[]) => 
  classes.filter(Boolean).join(' ');
