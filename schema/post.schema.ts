import z from "zod";

export const createPostSchema = z.object({
  image: z.string(),
  name: z.string(),
  price: z.number(),
  authorId: z.string(),
  categoryId: z.string(),
});

export const changeStatusApprovePostSchema = z.object({
  postId: z.string(),
  userApprovedId: z.string(),
  status: z.boolean()
});
