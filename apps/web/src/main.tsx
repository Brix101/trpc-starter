import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Toaster } from "@/components/ui/sonner.tsx";
import { TRPCProvider } from "@/providers/trpc-provider.tsx";
import App from "./App.tsx";

import "./index.css";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TRPCProvider>
      <App />
      <Toaster />
    </TRPCProvider>
  </StrictMode>,
);
