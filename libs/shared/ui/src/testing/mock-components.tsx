/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

/**
 * Mock UI Components for testing
 * These simplified versions don't rely on external dependencies like next-intl or Radix UI
 */

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

// Utility function
export const cn = (...classes: (string | undefined | null | false)[]) => 
  classes.filter(Boolean).join(' ');
