import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import {
  changeStatusApprovePostSchema,
  createPostSchema,
} from "../../../schema/post.schema";
import { createRouter, publicProcedure } from "../utils/trpc";
import * as trpc from "@trpc/server";

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
            approved: status,
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
    
});
