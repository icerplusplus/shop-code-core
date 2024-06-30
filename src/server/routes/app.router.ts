
import { createCallerFactory, createRouter } from '../utils/trpc';
import { postRouter } from './post.router';
import { userRouter } from './user.router'
import { sectionRouter } from './section.router'

export const appRouter = createRouter({
  user: userRouter,
  section: sectionRouter,
  post: postRouter
})

export const createCaller = createCallerFactory(appRouter);

export type AppRouter = typeof appRouter;