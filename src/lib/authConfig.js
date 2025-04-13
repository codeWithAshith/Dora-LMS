import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";

export const authOptions = {
    providers: [
        // GitHub OAuth
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),

        // Google OAuth
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],

    pages: {
        signIn: "/auth/login"
    },

    // Custom logic during signIn
    callbacks: {
        // Save user session data to the cookie
        async session({session, token}) {
            return session;
        },
    },

    secret: process.env.NEXTAUTH_SECRET,
};