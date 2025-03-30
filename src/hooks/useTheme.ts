import { useState, useEffect } from 'react';

export type AppTheme = 'light' | 'dark';

export const useTheme = () => {
  // Initialize theme from localStorage
  const [theme, setTheme] = useState<AppTheme>(() => {
    return (localStorage.getItem('theme') as AppTheme) || 'light';
  });

  useEffect(() => {
    document.body.classList.toggle('dark-mode', theme === 'dark');
    document.body.classList.toggle('light-mode', theme === 'light');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return { theme, toggleTheme };
};
