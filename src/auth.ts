import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";
import { JWT } from "next-auth/jwt";

const prisma = new PrismaClient();

declare module "next-auth" {
  interface Session {
    user: IUser & {
      id: string;
    }
  }

  interface User extends IUser {}
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    email: string | null | undefined;
    name: string | null | undefined;
  }
}

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials): Promise<IUser | null> {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        });

        if (!user) {
          return null;
        }

        const isPasswordValid = await compare(credentials.password, user.password);

        if (!isPasswordValid) {
          return null;
        }

        console.log(credentials.password)
        console.log(user.password)

        return {
          id: String(user.id), 
          email: user.email,
          name: user.username,
        };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) : Promise<JWT>{
      if (user) {
        return {
          ...token,
          id: user.id,
          email: user.email,
          name: user.name,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          email: token.email,
          name: token.name,
        }
      };
    }
  }
};