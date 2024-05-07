import Github from "next-auth/providers/github";
import {TypeORMAdapter} from "@auth/typeorm-adapter";
import {Adapter} from "next-auth/adapters";
import NextAuth, {AuthOptions} from "next-auth";
import {DataSource, DataSourceOptions} from "typeorm";
import {SnakeNamingStrategy} from "typeorm-naming-strategies";
import * as entities from "@/common/models/entities";
import {LaptopEntity} from "@/common/models/ILaptop";
import {LaptopUserEntity} from "@/common/models/ILaptopUser";
import {AccountEntity, SessionEntity, UserEntity, VerificationTokenEntity} from "@/common/models/entities";

const githubClientId = process.env.GITHUB_CLIENT_ID;
const githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
if (!githubClientId || !githubClientSecret) {
    throw new Error('GitHub credentials are not provided');
}

const azureClientId = process.env.AZURE_CLIENT_ID;
const azureClientSecret = process.env.AZURE_CLIENT_SECRET;
const azureTenantId = process.env.AZURE_TENANT_ID;

if (!azureClientId || !azureClientSecret || !azureTenantId) {
    throw new Error('GitHub credentials are not provided');
}

const connection: DataSourceOptions = {
    type: "mysql",
    host: process.env.IP,
    port: 3306,
    username: process.env.PRODUCTION_USERNAME,
    password: process.env.PRODUCTION_PASSWORD,
    database: "inventory",
    namingStrategy: new SnakeNamingStrategy(),

    dropSchema: false,
    logging: false,
    synchronize: false,
    migrationsRun: false,
    cache: {duration: 60000},
    entities: [LaptopEntity, LaptopUserEntity, UserEntity, SessionEntity, VerificationTokenEntity, AccountEntity],
}

export const databaseSource: DataSource = new DataSource(connection);


export const authOptions: AuthOptions = {
    debug: true,
    pages: {
        signIn: "/signin"
    },
    providers: [
        Github({
            clientId: githubClientId,
            clientSecret: githubClientSecret,
            allowDangerousEmailAccountLinking: true
        })
    ],
    adapter: TypeORMAdapter(connection, {entities}) as Adapter,
    session:
        {
            // Choose how you want to save the user session.
            // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
            // If you use an `adapter` however, we default it to `"database"` instead.
            // You can still force a JWT session by explicitly defining `"jwt"`.
            // When using `"database"`, the session cookie will only contain a `sessionToken` value,
            // which is used to look up the session in the database.
            strategy: "database",
            //expressed in seconds
            maxAge:
                60 * 15 //minutes
        },
    callbacks: {
        async session({session, user, trigger}) {
            // Send properties to the client, like an access_token and user id from a provider.
            session.user.role = user.role

            return session
        }
    }
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}