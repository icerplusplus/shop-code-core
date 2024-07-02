import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import {
  changeStatusApprovePostSchema,
  createPostSchema,
  getSectionSchema,
} from "@/schema/post.schema";
import { createRouter, publicProcedure } from "../utils/trpc";
import * as trpc from "@trpc/server";
import { mockSection } from "@/utils/constant";

export const postRouter = createRouter({
  "upload-post": publicProcedure
    .input(createPostSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        const { image, name, price, authorId, categoryId } = input;
        const post = await ctx.prisma.post.create({
          data: {
            image,
            name,
            price,
            authorId,
            categoryId,
          },
        });
        return post;
      } catch (e) {
        if (e instanceof PrismaClientKnownRequestError) {
          if (e.code === "P2002") {
            throw new trpc.TRPCError({
              code: "CONFLICT",
              message: "Post already exists",
            });
          }
        }

        throw new trpc.TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong",
        });
      }
    }),
  "change-status-post": publicProcedure
    .input(changeStatusApprovePostSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        const { postId, status, userApprovedId } = input;
        const post = await ctx.prisma.post.update({
          where: {
            id: postId,
          },
          data: {
            published: status,
          },
        });
        return post;
      } catch (e) {
        if (e instanceof PrismaClientKnownRequestError) {
          if (e.code === "P2002") {
            throw new trpc.TRPCError({
              code: "CONFLICT",
              message:
                "Server have been conflicted when change status of your post",
            });
          }
        }

        throw new trpc.TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong",
        });
      }
    }),
    "get-section-body-by-request": publicProcedure.input(getSectionSchema).query(async ({ ctx, input }) => {
      const takeOutput = 10
      try {
        switch (input.sectionName) {
          case "top-websites": {
            const topWebsites = await ctx.prisma.post.findMany({
              orderBy: {
                createdAt: "desc",
              },
              take: takeOutput,
              where: {
                category: {
                  name: "Website",
                },
              },
            });
            return {
              title: "TOP WEBSITES",
              viewMoreLink: "/source-code/view-more",
              posts: topWebsites.length === 0 ? mockSection[1].posts : topWebsites,
            };
          }
          case "top-softwares": {
            const topSoftwares = await ctx.prisma.post.findMany({
              orderBy: {
                createdAt: "desc",
              },
              take: takeOutput,
              where: {
                category: {
                  name: "Software",
                },
              },
            });
            return {
              title: "TOP SOFTWARES",
              viewMoreLink: "/source-code/view-more",
              posts: topSoftwares.length === 0 ? mockSection[2].posts : topSoftwares
            };
          }
          case "top-apps": {
            const topApps = await ctx.prisma.post.findMany({
              orderBy: {
                createdAt: "desc",
              },
              take: takeOutput,
              where: {
                category: {
                  slug: "App",
                },
              },
            });
            return {
              title: "TOP APPS",
              viewMoreLink: "/source-code/view-more",
              posts: topApps.length === 0 ? mockSection[3].posts : topApps
            };
          }
          case "top-games": {
            const topGames = await ctx.prisma.post.findMany({
              orderBy: {
                createdAt: "desc",
              },
              take: takeOutput,
              where: {
                category: {
                  slug: "Game",
                },
              },
            });
            return {
              title: "TOP GAMES",
              viewMoreLink: "/source-code/view-more",
              posts: topGames.length === 0 ? mockSection[4].posts : topGames
            };
          }
        
          default: {
            const newSourceCode = await ctx.prisma.post.findMany({
              orderBy: {
                createdAt: "desc",
              },
              take: takeOutput,
            });
            return {
              title: "NEW SOURCE CODE",
              viewMoreLink: "/source-code/view-more",
              posts:
                newSourceCode.length === 0 ? mockSection[0].posts : newSourceCode,
            };
          }
        }
      } catch (error) {
        throw new trpc.TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong",
        });
      }
    }),
});
