'use client';

import * as React from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  Building2,
  Coins,
  FileText,
  Home,
  Moon,
  Newspaper,
  Phone,
  Sparkles,
  Sun,
  Cookie,
  Scale,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

type LinkItem = {
  title: string;
  to: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
};

const companyLinks: LinkItem[] = [
  {
    title: 'Blog',
    to: '/blog',
    description: 'Insights, product updates, and practical business guides.',
    icon: Newspaper,
  },
  {
    title: 'Careers',
    to: '/careers',
    description: 'Join the team building software for African businesses.',
    icon: Briefcase,
  },
  {
    title: 'Contact',
    to: '/contact',
    description: 'Talk to sales, request a demo, or ask product questions.',
    icon: Phone,
  },
];

const policyLinks: LinkItem[] = [
  { title: 'Privacy Policy', to: '/privacy', icon: FileText },
  { title: 'Terms & Conditions', to: '/terms', icon: Scale },
  { title: 'Cookie Policy', to: '/cookies', icon: Cookie },
];

const primaryLinks = [
  { title: 'Features', to: '/features' },
  { title: 'Industries', to: '/industries' },
  { title: 'Pricing', to: '/pricing' },
  { title: 'Blog', to: '/blog' },
];

const mainLinks: LinkItem[] = [
  { title: 'Features', to: '/features', icon: Sparkles },
  { title: 'Industries', to: '/industries', icon: Building2 },
  { title: 'Pricing', to: '/pricing', icon: Coins },
  { title: 'Blog', to: '/blog', icon: Newspaper },
];

export function Header() {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const scrolled = useScroll(12);
  const { theme, toggleTheme } = useTheme();

  React.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="pointer-events-auto mx-auto mt-3 w-full max-w-6xl px-4 sm:mt-4 sm:px-6 lg:px-8"
      >
        <div
          className={cn(
            'relative overflow-visible rounded-[28px] border border-white/20 bg-background/70 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.45)] supports-[backdrop-filter]:backdrop-blur-xl',
            'before:absolute before:inset-x-10 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-primary/50 before:to-transparent before:content-[""]',
            scrolled && 'bg-background/82 border-border/70 shadow-[0_24px_70px_-28px_rgba(15,23,42,0.55)]',
          )}
        >
          <nav className="relative flex h-14 items-center justify-between gap-2 px-2 sm:px-3 lg:h-[64px] lg:px-4">
            <div className="flex min-w-0 items-center gap-2 lg:gap-5 z-10">
              <Link
                to="/"
                className="group flex shrink-0 items-center gap-2 rounded-full px-2 py-1 transition-colors hover:bg-accent/60"
              >
                <img
                  src="https://res.cloudinary.com/dzorbbb7s/image/upload/v1760597632/Solby_Logo_rzhueo.png"
                  alt="Solby logo"
                  className="h-7 w-auto object-contain sm:h-8"
                />
                {/* Logo only - subtitle removed to reduce navbar size */}
              </Link>
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center gap-1 rounded-full border border-border/50 bg-muted/25 p-1 z-10">
              {primaryLinks.map((item) => (
                <Link
                  key={item.title}
                  to={item.to}
                  className={cn(
                    'inline-flex h-10 items-center rounded-full px-4 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground',
                    matchesPath(location.pathname, item.to) && 'bg-background text-foreground shadow-sm ring-1 ring-border/60',
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="hidden items-center gap-2 lg:flex z-10">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-muted-foreground hover:text-foreground"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button asChild className="rounded-full px-5 shadow-lg shadow-primary/20">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-muted-foreground hover:text-foreground"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button
                size="icon"
                variant="outline"
                onClick={() => setOpen((value) => !value)}
                className="rounded-full border-border/70 bg-background/80"
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label="Toggle menu"
              >
                <MenuToggleIcon open={open} className="size-5" duration={300} />
              </Button>
            </div>
          </nav>
        </div>
      </motion.header>

      <MobileMenu open={open}>
        <div className="rounded-[28px] border border-border/70 bg-background/95 p-5 shadow-2xl supports-[backdrop-filter]:backdrop-blur-xl">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-foreground">Navigation</p>
              <p className="text-xs text-muted-foreground">Explore Solby products, company info, and support pages.</p>
            </div>
            <Button size="icon" variant="ghost" className="rounded-full" onClick={() => setOpen(false)}>
              <MenuToggleIcon open={true} className="size-5" duration={300} />
            </Button>
          </div>

          <div className="space-y-6">
            <MenuGroup title="Main" items={mainLinks} pathname={location.pathname} compact />
            <MenuGroup title="Company" items={companyLinks} pathname={location.pathname} />
            <MenuGroup title="Policies" items={policyLinks} pathname={location.pathname} compact />
          </div>

          <div className="mt-6">
            <Button asChild className="w-full rounded-full">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </MobileMenu>
    </div>
  );
}

type MobileMenuProps = {
  open: boolean;
  children: React.ReactNode;
};

function MobileMenu({ open, children }: MobileMenuProps) {
  if (!open || typeof window === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-40 bg-background/45 px-4 pt-24 backdrop-blur-md lg:hidden"
      >
        <motion.div
          id="mobile-menu"
          initial={{ y: -18, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -12, opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="mx-auto max-w-xl"
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
}

function MenuGroup({
  title,
  items,
  pathname,
  compact = false,
}: {
  title: string;
  items: LinkItem[];
  pathname: string;
  compact?: boolean;
}) {
  return (
    <div>
      <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{title}</p>
      <div className="space-y-2">
        {items.map((item) => (
          <Link
            key={item.title}
            to={item.to}
            className={cn(
              'flex items-center gap-3 rounded-2xl border border-transparent px-3 py-3 transition-colors hover:border-border/60 hover:bg-accent/60',
              matchesPath(pathname, item.to) && 'border-border/70 bg-accent/70',
            )}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <item.icon className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-medium text-foreground">{item.title}</div>
              {!compact && item.description ? <div className="text-xs text-muted-foreground">{item.description}</div> : null}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function useScroll(threshold: number) {
  const [scrolled, setScrolled] = React.useState(false);

  const onScroll = React.useCallback(() => {
    setScrolled(window.scrollY > threshold);
  }, [threshold]);

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  React.useEffect(() => {
    onScroll();
  }, [onScroll]);

  return scrolled;
}

function matchesPath(pathname: string, to: string) {
  if (to === '/') return pathname === '/';
  return pathname === to || pathname.startsWith(`${to}/`);
}