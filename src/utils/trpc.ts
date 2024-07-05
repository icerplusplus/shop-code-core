import type { AppRouter } from "@/server/routes/app.router";
import {
  loggerLink,
  unstable_httpBatchStreamLink,
} from "@trpc/client";
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

export const trpc = createTRPCNext<AppRouter>({
  config({ ctx }) {
    const links = [
      loggerLink({
        enabled: (opts) =>
          process.env.NODE_ENV === "development" ||
          (opts.direction === "down" && opts.result instanceof Error),
      }),
      unstable_httpBatchStreamLink({
        url,
        fetch(url, options) {
          return fetch(url, {
            ...options,
            credentials: "include",
          });
        },
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
          ctx?.res?.setHeader("Access-Control-Request-Method", "*");
          ctx?.res?.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
          ctx?.res?.setHeader("Access-Control-Allow-Headers", "*");

          return {
            ...ctx.req.headers,
            "x-ssr": "1",
          };
        }
        return {};
      },
      transformer,
    };
  },
  ssr: false,
});
