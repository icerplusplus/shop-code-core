"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc } from "@/utils/trpc";
import { Main, SideBar } from "@/components/shared";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen bg-gradient-to-r from-[#0e1b2e] via-[#0b2a58] to-[#1b335b]">
        <SideBar />
        <Main>{children}</Main>
      </div>
    </QueryClientProvider>
  );
}
export default trpc.withTRPC(Layout);
