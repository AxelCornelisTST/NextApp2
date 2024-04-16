import {Session, User} from "lucia";

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

export function getSessionName(user: User | null): string {
    if (!!user && !!user && !!user.username)
        return user.username;
    return "user";
}

export function isAuthorized(user: User | null): boolean {
    return !!user && user.role !== "";
}