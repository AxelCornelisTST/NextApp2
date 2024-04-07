import NextAuth from "next-auth"
import Github from "next-auth/providers/github";

const githubClientId = process.env.GITHUB_ID;
const githubClientSecret = process.env.GITHUB_SECRET;
if (!githubClientId || !githubClientSecret) {
    throw new Error('GitHub credentials are not provided');
}

const config = {
    providers: [
        Github({clientId: githubClientId, clientSecret: githubClientSecret})
    ],
}

const handler = NextAuth(config)

export {handler as GET, handler as POST}