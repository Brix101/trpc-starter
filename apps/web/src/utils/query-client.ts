import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      console.error(
        `An error occurred: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      );
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      console.error(
        `An error occurred: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      );
    },
  }),
});
