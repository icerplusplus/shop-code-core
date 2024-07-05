import { initTRPC } from '@trpc/server';
import type { Context } from '@/server/createContext';
import {transformer} from '@/utils/transformer' 


const t = initTRPC.context<Context>().create({
    /**
     * @link https://trpc.io/docs/v11/data-transformers
     */
    transformer,
    allowOutsideOfServer: true,
    /**
     * @link https://trpc.io/docs/v11/error-formatting
     */
    errorFormatter({ shape }) {
      return shape;
    },
  });
  
  /**
   * Create a router
   * @link https://trpc.io/docs/v11/router
   */
  export const createRouter = t.router;
  
  /**
   * Create an unprotected procedure
   * @link https://trpc.io/docs/v11/procedures
   **/
  export const publicProcedure = t.procedure;
  
  /**
   * Merge multiple routers together
   * @link https://trpc.io/docs/v11/merging-routers
   */
  export const mergeRouters = t.mergeRouters;
  
  /**
   * Create a server-side caller
   * @link https://trpc.io/docs/v11/server/server-side-calls
   */
  export const createCallerFactory = t.createCallerFactory;