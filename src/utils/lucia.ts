import prisma from "@lucia-auth/adapter-prisma";
import lucia from "lucia-auth";
import { node } from "lucia-auth/middleware";
import "lucia-auth/polyfill/node";

import { prismaClient } from "./db";

export const auth = lucia({
  adapter: prisma(prismaClient),
  env: process.env.NODE_ENV === "development" ? "DEV" : "PROD",
  middleware: node(),
  transformDatabaseUser: (userData) => ({
    id: userData.id,
    name: userData.name,
  }),
});

export type Auth = typeof auth;
