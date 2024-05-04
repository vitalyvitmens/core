import { getServerSession } from "next-auth";
import { nextAuthConfig } from "./next-auth-congig";

export const getAppSessionServer = () => getServerSession(nextAuthConfig);
