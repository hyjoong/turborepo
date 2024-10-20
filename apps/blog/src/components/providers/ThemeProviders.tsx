"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

const ThemeProviders = ({ children }: { children: React.ReactNode }) => {
  const [isMount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!isMount) {
    return null;
  }

  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='dark'
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviders;
