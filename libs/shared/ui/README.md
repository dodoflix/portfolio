# @portfolio/ui

React component library.

## Usage

```tsx
import { Button, Card, Heading, Container } from '@portfolio/ui';
```

## Components

### Base UI (Shadcn)

`Button`, `Card`, `Badge`, `Input`, `Textarea`, `Label`, `Select`, `Checkbox`, `Switch`, `Dialog`, `AlertDialog`, `DropdownMenu`, `Tabs`, `Accordion`, `Tooltip`, `Popover`, `Progress`, `Slider`, `Avatar`, `Skeleton`, `Separator`, `ScrollArea`, `ThemeToggle`, `ThemeProvider`, `LanguageSwitcher`

### Layout

```tsx
import { Container, Section, PageLayout, CenteredLayout } from '@portfolio/ui';
```

- `Container` - max-width wrapper
- `Section` - page section with spacing
- `PageLayout` - full page wrapper
- `CenteredLayout` - centered content (for 404, error pages)

### Typography

```tsx
import { Heading, Text, GradientText } from '@portfolio/ui';
```

- `Heading` - h1-h6 with size variants
- `Text` - paragraph with variants
- `GradientText` - gradient text effect

### Navigation

```tsx
import { Navbar, NavLink, Footer, Logo, Copyright } from '@portfolio/ui';
```

### Content

```tsx
import { Hero, SectionHeader, ProjectCard, SkillBar, TechBadge, StatCard } from '@portfolio/ui';
```

### Status

```tsx
import { StatusIcon, StatusIndicator, BigText, ActionButtons } from '@portfolio/ui';
```

### Utility

```tsx
import { TypeWriter, FadeIn, SocialLinks, TipsList, Icon, Icons } from '@portfolio/ui';
import { GitHubIcon, LinkedInIcon, EmailIcon } from '@portfolio/ui';
```

### Utils

```tsx
import { cn } from '@portfolio/ui';

cn('px-2 py-1', 'px-4') // → 'py-1 px-4'
```

## Testing

```tsx
// Mock components for tests
import { Button, Card } from '@portfolio/ui/testing';
```

## Commands

```bash
pnpm nx test ui
pnpm nx build ui
pnpm nx lint ui
```

## Adding Components

1. Create in `src/components/<category>/`
2. Export from category index
3. Add tests
4. Update `src/testing/mock-components.tsx`
