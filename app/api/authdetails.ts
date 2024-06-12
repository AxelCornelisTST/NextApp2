import {DataSource, DataSourceOptions} from "typeorm";
import {SnakeNamingStrategy} from "typeorm-naming-strategies";
import {LaptopEntity} from "@/common/models/ILaptop";
import {LaptopUserEntity} from "@/common/models/ILaptopUser";
import * as entities from "@/common/models/entities";
import {AccountEntity, SessionEntity, UserEntity, VerificationTokenEntity} from "@/common/models/entities";
import {NextAuthOptions} from "next-auth";
import Github from "next-auth/providers/github";
import {Adapter} from "next-auth/adapters";
import {TypeORMAdapter} from "@auth/typeorm-adapter";

const connection: DataSourceOptions = {
    type: "mysql",
    host: process.env.IP,
    port: 3306,
    username: process.env.PRODUCTION_USERNAME,
    password: process.env.PRODUCTION_PASSWORD,
    database: process.env.DB_NAME,
    namingStrategy: new SnakeNamingStrategy(),

    dropSchema: false,
    logging: false,
    synchronize: false,
    migrationsRun: false,
    cache: {duration: 60000},
    entities: [LaptopEntity, LaptopUserEntity, UserEntity, SessionEntity, VerificationTokenEntity, AccountEntity],
}

export const databaseSource: DataSource = new DataSource(connection);

const githubClientId = process.env.GITHUB_CLIENT_ID;
const githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
if (!githubClientId || !githubClientSecret) {
    throw new Error('GitHub credentials are not provided');
}

const azureClientId = process.env.AZURE_CLIENT_ID;
const azureClientSecret = process.env.AZURE_CLIENT_SECRET;
const azureTenantId = process.env.AZURE_TENANT_ID;

if (!azureClientId || !azureClientSecret || !azureTenantId) {
    throw new Error('azure credentials are not provided');
}
export const authOptions: NextAuthOptions = {
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
            // When using `"database"`, the session cookie will only contain a `sessionToken` value,
            // which is used to look up the session in the database.
            strategy: "database",
            maxAge: 60 * 15 //minutes
        },
    callbacks: {
        async session({session, user, trigger}) {
            session.user.role = user.role
            return session
        }
    }
}
