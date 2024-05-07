import { nextAuthConfig } from "@/src/app/entities/user/next-auth-config";
import NextAuth from "next-auth/next";

const authHandler = NextAuth(nextAuthConfig);

export { authHandler as GET, authHandler as POST };
