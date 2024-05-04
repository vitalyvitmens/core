"use client";

import { ThemeProvider } from "@/src/features/theme/theme-provider";
import { ComposeChildren } from "@/src/shared/lib/react";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ComposeChildren>
      <ThemeProvider>{children}</ThemeProvider>
    </ComposeChildren>
  );
}
