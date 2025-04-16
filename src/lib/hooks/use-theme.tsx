'use client';
import { Cursor } from '@/components';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

const initialState = {
  isDarkMode: false,
  toggle: () => { },
  enableDarkMode: () => { },
  disableDarkMode: () => { },
};

const ThemeContext = createContext(initialState);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const darkPref = localStorage.getItem('darkMode');
      const isDark = darkPref ? JSON.parse(darkPref) : true;
      setIsDarkMode(isDark);
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated || typeof document === 'undefined') return;

    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode, hydrated]);

  const toggle = useCallback(() => setIsDarkMode((prev) => !prev), []);
  const enableDarkMode = useCallback(() => setIsDarkMode(true), []);
  const disableDarkMode = useCallback(() => setIsDarkMode(false), []);

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggle,
        enableDarkMode,
        disableDarkMode,
      }}
    >
      <Cursor className="hidden dark:lg:block" />
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}