"use client"

import { ThemeProvider } from "@/modules/theme/providers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({children}: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <>{children}</>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
