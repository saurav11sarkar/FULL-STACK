import NextAuth from "next-auth"
import {authOptions} from "@/components/utils/authOptions";

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }