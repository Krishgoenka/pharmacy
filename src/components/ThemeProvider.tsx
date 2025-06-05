
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
  theme: 'light', // Fallback, will be overridden by provider's defaultTheme
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'light',
  storageKey = 'mahendra-pharmacy-ui-theme',
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  // Effect to initialize theme from localStorage on client mount
  useEffect(() => {
    setMounted(true);
    try {
      const storedTheme = localStorage.getItem(storageKey) as Theme | null;
      if (storedTheme && (storedTheme === 'light' || storedTheme === 'dark')) {
        // Only update the theme state if the stored theme is different from the initial defaultTheme
        // This ensures the theme state correctly reflects localStorage if it was set.
        if (storedTheme !== defaultTheme) {
          setTheme(storedTheme);
        }
      }
      // If no valid theme in localStorage, `theme` state (initialized to defaultTheme) is correct.
      // The subsequent effect will handle persisting defaultTheme to localStorage if it's not already there.
    } catch (e) {
      console.warn(`[ThemeProvider] Failed to access localStorage to get theme: ${e}`);
      // `theme` state remains `defaultTheme` in case of error.
    }
  }, [defaultTheme, storageKey]); // Runs once on mount and if these props were to change

  // Effect to apply the current theme to the DOM and update localStorage
  useEffect(() => {
    if (!mounted) {
      // Don't run on server or before client has mounted and potentially read from localStorage.
      return;
    }

    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);

    try {
      // Persist the current theme (either default or from localStorage) to localStorage.
      localStorage.setItem(storageKey, theme);
    } catch (e) {
      console.warn(`[ThemeProvider] Failed to set theme in localStorage: ${e}`);
    }
  }, [theme, mounted, storageKey]); // Runs when `theme` changes or when `mounted` becomes true

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      setTheme(newTheme); // This will trigger the effect above to apply and persist the theme
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
