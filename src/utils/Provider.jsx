"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ClerkProvider } from "@clerk/nextjs";
import { viVN } from "@clerk/localizations";

const queryClient = new QueryClient();

const Provider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ClerkProvider localization={viVN}>{children}</ClerkProvider>
    </QueryClientProvider>
  );
};

export default Provider;
