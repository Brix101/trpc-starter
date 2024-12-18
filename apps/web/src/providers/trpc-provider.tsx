import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { httpBatchLink, loggerLink } from "@trpc/client";
import superjson from "superjson";

import { queryClient } from "@/utils/query-client";
import { trpc } from "@/utils/trpc";

export function TRPCProvider(props: React.PropsWithChildren) {
  const [trpcClient] = React.useState(() =>
    trpc.createClient({
      links: [
        loggerLink({
          enabled: (opts) =>
            // eslint-disable-next-line turbo/no-undeclared-env-vars
            (import.meta.env.DEV && typeof window !== "undefined") ||
            (opts.direction === "down" && opts.result instanceof Error),
        }),
        httpBatchLink({
          transformer: superjson,
          url: "/trpc",
          // You can pass any HTTP headers you wish here
          //   async headers() {
          //     return {
          //       authorization: getAuthCookie(),
          //     };
          //   },
        }),
      ],
    }),
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {props.children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </trpc.Provider>
  );
}
