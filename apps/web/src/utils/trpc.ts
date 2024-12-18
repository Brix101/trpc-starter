import type { AppRouter } from "@acme/api";
import type { inferReactQueryProcedureOptions } from "@trpc/react-query";
import { createTRPCReact } from "@trpc/react-query";

// infer the types for your router
export type ReactQueryOptions = inferReactQueryProcedureOptions<AppRouter>;

export const api = createTRPCReact<AppRouter>();
