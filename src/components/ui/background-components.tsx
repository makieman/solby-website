import { cn } from "@/lib/utils";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

type Props = {
  maxWidth?: string;
  // Light mode gradient colors (fallbacks used via CSS vars if provided)
  lightStart?: string;
  lightEnd?: string;
  lightOpacity?: number;
  mixBlendMode?: React.CSSProperties['mixBlendMode'];
};

export const Component = ({
  maxWidth = 'max-w-[420px]',
  lightStart = '#FFF8EE',
  lightEnd = '#F5FAFF',
  lightOpacity = 0.6,
  mixBlendMode = 'multiply',
}: Props) => {
  const [count, setCount] = useState(0);
  const { theme } = useTheme();

  // Use CSS variables when available; fall back to the prop values.
  const overlayStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(135deg, var(--bg-start, ${lightStart}) 0%, var(--bg-end, ${lightEnd}) 100%)`,
    opacity: parseFloat(getCssVar('--bg-opacity')) || lightOpacity,
    mixBlendMode: (getCssVar('--bg-mix') as React.CSSProperties['mixBlendMode']) || mixBlendMode,
  };

  return (
    <div className={cn('min-h-screen w-full relative', theme === 'light' ? 'bg-white' : 'bg-background')}>
      {/* Light-mode soft gradient overlay (theme-aware). Dark mode remains unchanged. */}
      {theme === 'light' ? <div className="absolute inset-0 z-0" style={overlayStyle} /> : null}

      <div className={cn('relative z-10 p-8', maxWidth)}>
        <h3 className="text-lg font-semibold text-foreground">Background component (demo)</h3>
        <p className="mt-2 text-sm text-muted-foreground">Click the button to test local state.</p>
        <button
          onClick={() => setCount((c) => c + 1)}
          className="mt-4 inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-white"
        >
          Clicked {count}
        </button>
      </div>
    </div>
  );
};

function getCssVar(name: string) {
  try {
    if (typeof window === 'undefined') return '';
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  } catch (e) {
    return '';
  }
}

export default Component;
