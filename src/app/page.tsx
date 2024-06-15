'use client'
import { trpc } from "@/utils/trpc"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function Home() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      </main>
    </QueryClientProvider>
    
  );
}

// TODO: add AppRouter generic type 
export default trpc.withTRPC(Home)