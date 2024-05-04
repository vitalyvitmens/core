import { nextAuthConfig } from "@/src/app/entities/session/next-auth-congig";
import NextAuth from "next-auth/next";

const authHandler = NextAuth(nextAuthConfig);

export { authHandler as GET, authHandler as POST };
