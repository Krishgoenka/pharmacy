
'use client';

import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: 'light', // This will be effectively overridden by defaultTheme prop in useState
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'light',
  storageKey = 'mahendra-pharmacy-ui-theme',
}: ThemeProviderProps) {
  // Initialize with defaultTheme to ensure server and initial client render state match
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  // Effect to read from localStorage and apply stored theme AFTER mount
  useEffect(() => {
    setMounted(true); // Mark as mounted on client
    try {
      const storedTheme = localStorage.getItem(storageKey) as Theme | null;
      if (storedTheme && (storedTheme === 'light' || storedTheme === 'dark')) {
        if (storedTheme !== theme) { // Only update if different from initial (defaultTheme)
          setTheme(storedTheme);
        }
      } else {
        // If no valid theme in localStorage, or it matches default,
        // ensure defaultTheme is visually applied and stored.
        // This handles first-ever load or cleared localStorage.
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(defaultTheme);
        localStorage.setItem(storageKey, defaultTheme);
      }
    } catch (e) {
      console.warn(`Failed to access localStorage for theme: ${e}`);
      // Fallback to applying defaultTheme visually if localStorage fails
      const root = window.document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(defaultTheme);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey, defaultTheme]); // Removed 'theme' from deps to avoid loop on initial set

  // Effect to update HTML class and localStorage when theme state changes (by user or initial load)
  useEffect(() => {
    if (!mounted) {
      // On server or before initial client mount, if theme is already default, do nothing extra.
      // The body class will be set by CSS vars derived from initial HTML class.
      // If we want to set the class on `html` during SSR, it's more complex.
      // For now, `suppressHydrationWarning` and matching initial state is key.
      return;
    }

    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    try {
      localStorage.setItem(storageKey, theme);
    } catch (e) {
      console.warn(`Failed to set theme in localStorage: ${e}`);
    }
  }, [theme, mounted, storageKey]);

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      if (!mounted) return; // Prevent setting theme before client is fully mounted and initialized
      setTheme(newTheme);
    },
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
