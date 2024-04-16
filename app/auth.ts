import {Lucia} from "lucia";
import {Mysql2Adapter} from "@lucia-auth/adapter-mysql";
import {dataBasePoolConnection} from "@/common/database";
import {GitHub} from "arctic";
import {IAuthUser} from "@/common/models/IAuthUser";

export const github = new GitHub(process.env.GITHUB_CLIENT_ID!, process.env.GITHUB_CLIENT_SECRET!);

const adapter = new Mysql2Adapter(dataBasePoolConnection.promise(), {
    user: "user", //user scheme name
    session: "user_session" //session scheme name
});

export const lucia = new Lucia(adapter, {
    sessionCookie: {
        // this sets cookies with super long expiration
        // since Next.js doesn't allow Lucia to extend cookie expiration when rendering pages
        expires: false,
        attributes: {
            // set to `true` when using HTTPS
            secure: process.env.NODE_ENV === "production"
        }
    },
    getUserAttributes: (attributes) => {
        return {
            // attributes has the type of IAuthUser
            role: attributes.role,
            githubId: attributes.github_id,
            username: attributes.username
        };
    }
});

// IMPORTANT!
declare module "lucia" {
    interface Register {
        Lucia: typeof lucia;
        DatabaseUserAttributes: IAuthUser;

    }
}