<<<<<<< HEAD
// utils/authOptions.ts - නවීකරණය කළ එක
=======
>>>>>>> b81937f767fdce31cf64e9ba1c27d4988fdcb432
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import prisma from "@/utils/db";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
<<<<<<< HEAD
=======
      id: "credentials",
>>>>>>> b81937f767fdce31cf64e9ba1c27d4988fdcb432
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
<<<<<<< HEAD
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findFirst({
          where: { email: credentials.email as string },
        });

        if (!user?.password) return null;

        const isValid = await bcrypt.compare(credentials.password as string, user.password);
        if (!isValid) return null;

        return { id: user.id, email: user.email, role: user.role };
=======
      async authorize(credentials: any) {
        const user = await prisma.user.findFirst({
          where: { email: credentials.email },
        });
        if (user && await bcrypt.compare(credentials.password, user.password!)) {
          return { id: user.id, email: user.email, role: user.role };
        }
        return null;
>>>>>>> b81937f767fdce31cf64e9ba1c27d4988fdcb432
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
<<<<<<< HEAD
};
=======
};
>>>>>>> b81937f767fdce31cf64e9ba1c27d4988fdcb432
