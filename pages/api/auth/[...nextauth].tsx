import NextAuth from "next-auth/next";
import Github from "next-auth/providers/github";
import { Provider } from "next-auth/providers/index";

export default NextAuth({
  providers: [
    Github({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
});
