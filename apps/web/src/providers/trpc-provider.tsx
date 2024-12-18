import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { httpBatchLink, loggerLink } from "@trpc/client";
import React from "react";
import superjson from "superjson";
import { queryClient } from "../utils/query-client";
import { api } from "../utils/trpc";

const env = import.meta.env;

export function TRPCReactProvider(props: React.PropsWithChildren) {
  const [trpcClient] = React.useState(() =>
    api.createClient({
      links: [
        loggerLink({
          enabled: (opts) =>
            (env.DEV && typeof window !== "undefined") ||
            (opts.direction === "down" && opts.result instanceof Error),
        }),
        httpBatchLink({
          transformer: superjson,
          url: "/api/trpc",
          headers() {
            const headers = new Headers();
            headers.set("x-trpc-source", "web-react");
            return headers;
          },
        }),
      ],
    }),
  );

  return (
    <api.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {props.children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </api.Provider>
  );
}
