import { NextApiRequest, NextApiResponse } from "next";
import { verifyJwt } from "@/utils/jwt";
import { prisma } from "@/utils/prisma";

interface CtxUser {
  id: string;
  email: string;
  name: string;
  iat: string;
  exp: number;
}

function getUserFromRequest(req: NextApiRequest) {
  const token = req.cookies.token;

  if (token) {
    try {
      const verified = verifyJwt<CtxUser>(token);
      return verified;
    } catch (e) {
      return null;
    }
  }

  return null;
}

export function createContext({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) {
  const user = getUserFromRequest(req);
  // Set CORS headers
  // res.appendHeader('Access-Control-Allow-Origin', baseUrl)
  // res.setHeader("Access-Control-Request-Method", "*");
  // res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
  // res.setHeader("Access-Control-Allow-Headers", "*");
  // // res.setHeader("Access-Control-Allow-Credentials", "true");

  return { req, res, prisma, user };
}

export type Context = ReturnType<typeof createContext>;
