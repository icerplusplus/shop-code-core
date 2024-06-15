"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface WrappedComponentProps {
  children: React.ReactNode;
}

const withProvider = <T,>(WrappedComponent: React.FC<T>) => {
  return (props: Readonly<T>) => {
    const queryClient = new QueryClient();
    return (
      <QueryClientProvider client={queryClient}>
        <WrappedComponent {...props} />
      </QueryClientProvider>
    );
  };
};

export default withProvider