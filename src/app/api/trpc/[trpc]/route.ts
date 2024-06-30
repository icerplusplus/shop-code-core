import { createContext } from "@/server/createContext";
import { appRouter } from "@/server/routes/app.router";
import { createNextApiHandler } from "@trpc/server/adapters/next";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = (req: Request, res: Request) => 
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
     //@ts-ignore
    createContext: createContext,
  })
export {handler as GET, handler as POST}