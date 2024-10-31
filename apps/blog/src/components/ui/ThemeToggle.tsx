'use client';

import { Button } from '@ui/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <>
      <Button
        variant='ghost'
        className='w-10 px-0'
        onClick={() => {
          setTheme(currentTheme === 'light' ? 'dark' : 'light');
        }}
      >
        {currentTheme === 'light' ? <Sun /> : <Moon />}
      </Button>
      <span className='sr-only'>Toggle Theme</span>
    </>
  );
};

export default ThemeToggle;
