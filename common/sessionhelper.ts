import {Session} from "next-auth";

export function getSessionMail(ses: Session | null): string {
    if (!!ses && !!ses.user && !!ses.user.email)
        return ses.user.email;
    return "";
}

export function getSessionImg(ses: Session | null): string {
    if (!!ses && !!ses.user && !!ses.user.image)
        return ses.user.image;
    return "";
}

export function getSessionName(ses: Session | null): string {
    if (!!ses && !!ses.user && !!ses.user.name)
        return ses.user.name;
    return "user";
}

export function isAuthorized(ses: Session | null): boolean {
    return !!ses && !!ses.user && !!ses.user.role;
}

export function isLoggedIn(ses: Session | null): boolean {
    return !!ses;
}