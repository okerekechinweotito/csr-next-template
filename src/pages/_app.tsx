import type { AppProps } from 'next/app';
import { ChakraProvider, useToast } from "@chakra-ui/react";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


export default function App({ Component, pageProps }: AppProps) {
  const toast = useToast();

  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error: any, query: any) => {
        if (
          query.options.hasOwnProperty("meta") &&
          query.options.meta.errorMessageToast
        ) {
          toast({
            title: "Server Error",
            description: `${query.meta.errorMessageToast}`,
            status: "error",
            duration: 9000,
            isClosable: true,
            position: "top",
          });
        } else {
          toast({
            title: "Server Error",
            description: "Fetch Aborted! Check your internet Connection",
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
