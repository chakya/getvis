import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prismadb";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID || "",
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    // }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID || "86d98issxsp0bq",
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET || "JWZI7oApC9o4j271",
    }),
  ],
};

export default NextAuth({
  ...authOptions,
});
