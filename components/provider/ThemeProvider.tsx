"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  // State to determine whether we are on the client
  const [mounted, setMounted] = React.useState(false);

  // Set mounted to true when the component has mounted on the client
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // If not mounted (i.e., on the server), return nothing to prevent mismatches
  if (!mounted) {
    return null;
  }

  // Return the ThemeProvider when mounted on the client
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
