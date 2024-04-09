import Github from "next-auth/providers/github";
import NextAuth, {AuthOptions} from "next-auth";
import {TypeORMAdapter} from "@auth/typeorm-adapter";
import {Adapter} from "next-auth/adapters";
import {ConnectionOptions} from "typeorm";
import {SnakeNamingStrategy} from 'typeorm-naming-strategies'
import {param} from "ts-interface-checker";
import {configSchema} from "next/dist/server/config-schema";

const githubClientId = process.env.GITHUB_ID;
const githubClientSecret = process.env.GITHUB_SECRET;
const server = process.env.DB_CONN;
if (!githubClientId || !githubClientSecret) {
    throw new Error('GitHub credentials are not provided');
}
if (!server)
    throw new Error('database connection not provided')

const connection: ConnectionOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "inventory",
    namingStrategy: new SnakeNamingStrategy(),
    synchronize: false,
}

export const authOptions: AuthOptions = {
    providers: [
        Github({
            clientId: githubClientId,
            clientSecret: githubClientSecret,
            allowDangerousEmailAccountLinking: true,

        })
    ],
    adapter: TypeORMAdapter(connection) as Adapter,
    session: {
        // Choose how you want to save the user session.
        // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
        // If you use an `adapter` however, we default it to `"database"` instead.
        // You can still force a JWT session by explicitly defining `"jwt"`.
        // When using `"database"`, the session cookie will only contain a `sessionToken` value,
        // which is used to look up the session in the database.
        strategy: "database",
        //expressed in seconds
        maxAge: 30 //Seconds
    }
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}