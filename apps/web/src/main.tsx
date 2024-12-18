import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { TRPCReactProvider } from "@/providers/trpc-provider.tsx";
import App from "./App.tsx";

import "./index.css";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TRPCReactProvider>
      <App />
    </TRPCReactProvider>
  </StrictMode>,
);
