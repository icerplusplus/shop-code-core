
import { createCallerFactory, createRouter, publicProcedure } from '../utils/trpc';
import { userRouter } from './user.router'

export const appRouter = createRouter({
  healthcheck: publicProcedure.query(() => 'yay!'),

  user: userRouter,
});

export const createCaller = createCallerFactory(appRouter);

export type AppRouter = typeof appRouter;