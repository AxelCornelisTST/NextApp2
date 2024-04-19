import {User} from "lucia";
import {SessionData} from "@/common/interface/SessionData";

// export function getSessionMail(user: Session | null): string {
//     if (!!ses && !!user && !!user.email)
//         return user.email;
//     return "";
// }
//
// export function getSessionImg(user: Session | null): string {
//     if (!!ses && !!user && !!user.image)
//         return user.image;
//     return "";
// }

export function getSessionName(session: SessionData): string {
    if (!session || !!session?.session)
        return "";
    if (!!session?.user && !!session.user?.username)
        return session.user.username;
    return "user";
}

export function isAuthorized(session: SessionData): boolean {
    return !!session && !!session.user && session.user.role !== "";
}