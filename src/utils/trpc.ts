import type { AppRouter } from "@/server/routes/app.router";
import { loggerLink, unstable_httpBatchStreamLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import { url } from "@/constants";
import type { NextPageContext } from "next";
import { transformer } from "./transformer";

export interface SSRContext extends NextPageContext {
  /**
   * Set HTTP Status code
   * @example
   * const utils = trpc.useUtils();
   * if (utils.ssrContext) {
   *   utils.ssrContext.status = 404;
   * }
   */
  status?: number;
}

export const trpc = createTRPCNext<AppRouter, SSRContext>({
  config({ ctx }) {
    const links = [
      loggerLink({
        enabled: (opts) =>
          process.env.NODE_ENV === "development" ||
          (opts.direction === "down" && opts.result instanceof Error),
      }),
      unstable_httpBatchStreamLink({
        url
      }),
    ];
    return {
      queryClientConfig: {
        defaultOptions: {
          queries: {
            staleTime: 60,
          },
        },
      },
      links,
      headers() {
        if (ctx?.req) {
          return {
            ...ctx.req.headers,
            "x-ssr": "1",
          };
        }
        return {};
      },
      transformer
    };
  },
  ssr: false,

});
