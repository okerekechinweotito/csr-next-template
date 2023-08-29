import type { AppProps } from 'next/app';
import { ChakraProvider, useToast } from "@chakra-ui/react";
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function App({ Component, pageProps }: AppProps) {
  const toast = useToast();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },

    queryCache: new QueryCache({
      onSuccess: (data: any, query: any) => {
        if (query.options.meta.successMessageToast) {
          toast({
            title: "Event Successful",
            description: `${query.options.meta.successMessageToast}`,
            status: "success",
            duration: 9000,
            isClosable: true,
            position: "top",
          });
        }
      },
      onError: (error: any, query: any) => {
        if (query.options.meta.errorMessageToast) {
          toast({
            title: "Server Error",
            description: `${query.meta.errorMessageToast}`,
            status: "error",
            duration: 9000,
            isClosable: true,
            position: "top",
          });
        }
      },
    }),

    mutationCache: new MutationCache({
      onSuccess: (data: any, variables: any, context: any, mutation: any) => {
        if (mutation.options.meta.successMessageToast) {
          toast({
            title: "Event Successful",
            description: ` ${mutation.options.meta.successMessageToast}`,
            status: "success",
            duration: 9000,
            isClosable: true,
            position: "top",
          });
        }
      },
      onError: (data: any, variables: any, context: any, mutation: any) => {
        if (mutation.options.meta.errorMessageToast) {
          toast({
            title: "Server Error",
            description: `${mutation.options.meta.errorMessageToast}`,
            status: "error",
            duration: 9000,
            isClosable: true,
            position: "top",
          });
        }
      },
    }),
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}
