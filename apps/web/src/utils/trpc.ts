import type { inferReactQueryProcedureOptions } from "@trpc/react-query";
import { createTRPCReact } from "@trpc/react-query";

import type { AppRouter } from "@acme/api";

// infer the types for your router
export type ReactQueryOptions = inferReactQueryProcedureOptions<AppRouter>;

export const trpc = createTRPCReact<AppRouter>();
