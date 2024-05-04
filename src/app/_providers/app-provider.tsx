"use client";

import { ThemeProvider } from "@/src/features/theme/theme-provider";
import { ComposeChildren } from "@/src/shared/lib/react";
import { AppSessionProvider } from "../entities/session/app-session-provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/src/shared/api/query-client";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ComposeChildren>
      <ThemeProvider>
        <AppSessionProvider>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </AppSessionProvider>
      </ThemeProvider>
    </ComposeChildren>
  );
}
